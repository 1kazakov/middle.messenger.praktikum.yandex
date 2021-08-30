import getValue from './get-value';

export default class Templator {
  context: {[key: string]: any}
  template: string
  REGEXP: {[key: string]: RegExp}
  singlTags: string[]
  attrNotEmpty: string[]
  mapTags: {[key: string]: any}[]
  element: HTMLElement | HTMLInputElement | null | any

  constructor() {
    this.context = {};
    this.template = '';
    this.REGEXP = {
      // TODO поменять названия
      TEMPLATE_REGEXP: /\{\{(.+?)\}\}/gi,
      TEMPLATE_LIST_REGEXP: /\{\%\s(?<value>.+?)\s\%\}(?<template>.+?)\{\%\send\s\%\}/isg,
      TEMPLATE_CONDITION_REGEXP: /\{\:\s(?<value>.+?)\s\:\}(?<template>.+?)\{\:\send\s\:\}/isg,
    };
    this.singlTags = ['input', 'img'],
    this.attrNotEmpty = ['value', 'class', 'placeholder'],
    this.mapTags = [],
    this.element = null;
  }

  compile = (template: string, context: {[key: string]: any}) => {
    this.context = context;
    this.template = template;
    this.compileListTemplate();
    this.compileCondition(this.context);
    this.parseHtml();
    return this.element;
  }

  private compileListTemplate() {
    const tmpl = this.template
    const listTemplates = [...tmpl.matchAll(this.REGEXP.TEMPLATE_LIST_REGEXP)];
    if (![...listTemplates].length) {
      return;
    }

    // console.log('listTemplates', listTemplates)

    for (let i = 0; i < listTemplates.length; i++) {
      // for (const listTemplate of listTemplates) {
      const { value, template } = listTemplates[i].groups;
      const newListItemTemplate = this.replaceListData(template, value);
      const datas = getValue(this.context, value.trim());
  
      if (!Array.isArray(datas)) {
        return;
      }

      let list = '';

      for(let i = 0; i < datas.length; i++) {
        list += newListItemTemplate.replaceAll('counter', `${i}`);
      }
      this.template = this.template.replace(listTemplates[i][0], list);
    }
  }

  private compileCondition(context: any) {
    const tmpl = this.template
    const conditionTemplates = [...tmpl.matchAll(this.REGEXP.TEMPLATE_CONDITION_REGEXP)];
    if (![...conditionTemplates].length) {
      return;
    }
    for (let i = 0; i < conditionTemplates.length; i++) {
      console.log('conditionTemplates[i]', conditionTemplates[i])
      const { value } = conditionTemplates[i].groups;
      const data = !!getValue(context, value.trim());
      console.log('data', data);
      console.log('context', context);
      
      if (data) {
        this.template = this.template
          .replace(`{: ${value} :}`, '')
          .replace('{: end :}', '');
      } else {
        this.template = this.template
          .replace(conditionTemplates[i][0], '');
      }
    }
  }

  replaceListData(template: string, dataName: string) {
    let templateListElement = template;
    let key = null;
    const regExp = this.REGEXP.TEMPLATE_REGEXP;

    if (!templateListElement) {
      return;
    }

    // eslint-disable-next-line
    while ((key = regExp.exec(templateListElement))) {
      if (key[1]) {
        templateListElement = templateListElement.replace(new RegExp(key[0], 'gi'), `{{ ${dataName}.counter }}`);
      }
    }
    return templateListElement;
  }

  private сompileTemplate(textContent: string) {
    let tmpl = textContent;
    const regExp = this.REGEXP.TEMPLATE_REGEXP;

    if (!tmpl) {
      return;
    }

    const fields = tmpl.matchAll(regExp)

    for (const field of fields) {
      if (field[1]) {
        const tmplValue = field[1].trim();
        const data = getValue(this.context, tmplValue);
        if (typeof data !== 'string') {
          return data;
        }
        tmpl = tmpl.replace(new RegExp(field[0], 'gi'), data);
      }
    }
    return tmpl;
  }
  parseHtml() {
    const regExpTags = /\<(?<closeTag>\/??)?(?<tagName>\w+?(?=\s|>))\s?(?<attr>[^<]+?)?(?<singlTag>\/??)?\>(?<textContent>[^<]+?(?=\<))?/g;
    // let result: any;
    const map: any[] = [];
    let nestingLevel: number = 0;
    let key: any = null;
    let tmpl = this.template;

    if (!tmpl) {
      return;
    }
    // console.log('tmpl', tmpl)

    while ((key = regExpTags.exec(tmpl))) {
      if (key[2]) { // key[2] = tagName
        const tag = this.getObjectTag(key);
        if ( nestingLevel === 0 || (tag.openTag && map[map.length - 1].openTag) || (tag.openTag && map[map.length - 1].singlTag)) {
          ++nestingLevel
        } else if (tag.singlTag && map[map.length - 1].openTag) {
          ++nestingLevel
        } else if ((tag.closeTag && map[map.length - 1].closeTag) || (tag.closeTag && map[map.length - 1].singlTag)) {
          --nestingLevel
        }
        tag.nestingLevel = nestingLevel;
        // console.log('tag', tag)
        map.push(tag);
      }
    }
    // console.log('map', map)
    this.mapTags = map;
    this.renderer();
  }
  getObjectTag(key: any) {
    const { closeTag, tagName, attr, textContent } = key.groups;
    const singlTag = this.singlTags.includes(tagName)
      ? this.singlTags.includes(tagName)
      : !!key.group?.singlTag
    const tag: {
      openTag: boolean,
      singlTag: boolean,
      closeTag: boolean,
      tagName: string,
      textContent: string,
      attrs: string[][],
      nestingLevel: number,
    } = {
      openTag: !closeTag && !singlTag,
      singlTag,
      closeTag: !!closeTag,
      tagName,
      textContent,
      attrs: attr ? this.parseAttr(attr) : null,
      nestingLevel: 0,
    };
    return tag;
  }
  parseAttr(attrString: string) {
    const regexpAttr = /(?<nameAttr>.+?)="(?<valueAttr>.*?)"/g;
    const attrs = [...attrString.matchAll(regexpAttr)].reduce( (acc: string[][], item: any) => [...acc, [item.groups.nameAttr.trim(), item.groups.valueAttr?.trim()]], []);
    return attrs;
  }
  renderer() {
    const tags = this.mapTags;
    const nesting: {[key: string]: HTMLElement | HTMLInputElement} = {};
    let element: HTMLElement | HTMLInputElement;
    for (const tag of tags) {
      // console.log('tag`render', tag)
      if (tag.openTag || tag.singlTag) {
        element = document.createElement(tag.tagName);
        if (tag.attrs) {
          for (const attr of tag.attrs) {
            element.setAttribute(attr[0], this.сompileTemplate(attr[1]))
          }
        }
        if (tag.textContent) {
          const content = this.сompileTemplate(tag.textContent);
          if (typeof content !== 'string') {
            element.append(content);
          } else {
            element.textContent = content;
          }
        }
        nesting[tag.nestingLevel] = element;
        if (tag.nestingLevel !== 1) {
          nesting[tag.nestingLevel - 1].append(element);
        }
      }
      if (!tag.openTag && !tag.singlTag && tag.textContent) {
        const content  = this.сompileTemplate(tag.textContent);
        nesting[tag.nestingLevel - 1].append(content);
      }
    }
    this.element = nesting[1]
  }
}
