import getValue from './get-value';

export default class Templator {
  context: {[key: string]: any}
  template: string
  REGEXP: {[key: string]: RegExp}
  components: string[]
  attrNotEmpty: string[]

  constructor() {
    this.context = {};
    this.template = '';
    this.REGEXP = {
      // TODO на будущее
      HTML_TAG: /<(?<tagName>\/?\w+?)(?<attrs>\s[^<>]+)?\/?>/g,
      // TODO поменять названия
      TEMPLATE_REGEXP: /\{\{(.+?)\}\}/gi,
      TEMPLATE: /(?<=(\{\{))(.*?)(?=(\}\}))/gi,
      TEMPLATE_LIST_REGEXP: /\{\{\sfor\s(?<value>.+?)\}\}(?<template>.+?)\{\{\s\/for\s\}\}/si,
    };
    this.components = ['button', 'input', 'inputFile', 'chat', 'option', 'message'],
    this.attrNotEmpty = ['value', 'class', 'placeholder']
  }

  compile = (template: string, context: {[key: string]: any}) => {
    this.context = context;
    this.template = template;
    return this.сompileTemplate();
  }

  private compileListTemplate(tmpl: string) {
    const listTemplate = tmpl.match(this.REGEXP.TEMPLATE_LIST_REGEXP);
    if (!listTemplate) {
      return tmpl;
    }

    const { value, template } = listTemplate.groups;
    const datas = getValue(this.context, value.trim());
    const tempVars = template.match(this.REGEXP.TEMPLATE);
    
    if (tempVars && tempVars.length === 0) {
      return tmpl;
    }

    if (!Array.isArray(datas)) {
      return tmpl;
    }

    let list = '';

    for (const data of datas) {
      let listElement = template;
      for (const tempVar of tempVars) {
        if (this.components.includes(tempVar.trim())) {
          listElement = listElement.replace(`{{${tempVar}}}`, data);;
          break;
        }
        const value = getValue(data, tempVar.trim());
        listElement = listElement.replace(`{{${tempVar}}}`, value);
      }
      list += listElement;
    }
    return tmpl.replace(listTemplate[0], list);
  }

  private сompileTemplate() {
    let tmpl = this.template;
    let key = null;
    const regExp = this.REGEXP.TEMPLATE_REGEXP;

    if (!tmpl) {
      return;
    }

    // eslint-disable-next-line
    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        if (key[1].includes('for ')) {
          tmpl = this.compileListTemplate(tmpl);
          // eslint-disable-next-line
          continue;
        }
        const tmplValue = key[1].trim();
        const data = getValue(this.context, tmplValue);
        regExp.lastIndex = regExp.lastIndex - key[0].length - data.length;
        tmpl = tmpl.replace(new RegExp(key[0], 'gi'), data);
      }
    }
    // eslint-disable-next-line consistent-return
    return tmpl;
  }
}
