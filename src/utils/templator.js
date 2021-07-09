import getValue from './getValue.js';

export default class Templator {
  constructor(template) {
    this.context = {};
    this.template = template;
    this.TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
    this.TEMPLATE = /(?<=(\{\{))(.*?)(?=(\}\}))/gi;
    this.TEMPLATE_LIST_REGEXP = /\{\{\sfor\s(?<value>.+?)\}\}(?<template>.+?)\{\{\s\/for\s\}\}/si;
  }

  compile(context) {
    this.context = context;
    return this.сompileTemplate();
  }

  compileListTemplate(tmpl, templateVariable) {
    console.log('2222222', templateVariable);
    const listTemplate = tmpl.match(this.TEMPLATE_LIST_REGEXP);
    if (!listTemplate) {
      return tmpl;
    }

    console.log('333333', listTemplate);

    const { value, template } = listTemplate.groups;
    const datas = getValue(this.context, value.trim());
    const tempVars = template.match(this.TEMPLATE);
    if (!tempVars) {
      return tmpl;
    }

    if (!Array.isArray(datas)) {
      return tmpl;
    }

    let list = '';

    for (const data of datas) {
      let listElement = template;
      for (const tempVar of tempVars) {
        const value = getValue(data, tempVar.trim());
        listElement = listElement.replace(`{{${tempVar}}}`, value);
      }
      list += listElement;
    }
    return tmpl.replace(listTemplate[0], list);
  }

  сompileTemplate() {
    let tmpl = this.template;
    let key = null;
    const regExp = this.TEMPLATE_REGEXP;

    if (!tmpl) {
      return;
    }

    // eslint-disable-next-line
    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        if (key[1].includes('for ')) {
          console.log('111111');
          console.log('key[1]', key[1]);
          tmpl = this.compileListTemplate(tmpl, key[1]);
          // eslint-disable-next-line
          continue;
        }
        const tmplValue = key[1].trim();
        const data = getValue(this.context, tmplValue);
        tmpl = tmpl.replace(new RegExp(key[0], 'gi'), data);
      }
    }

    // const templateVariables = tmpl.match(regExp);

    // if (!templateVariables) {
    //   return;
    // }

    // for (const templateVariable of templateVariables) {
    //   if (templateVariable.includes('for')) {
    //     this.compileListTemplate(tmpl, templateVariable);
    //   }
    //   const tmplValue = templateVariable.trim();
    //   const data = getValue(context, tmplValue);
    //   tmpl = tmpl.replace(templateVariable, data);
    // }
    // eslint-disable-next-line consistent-return
    return tmpl;
  }
}
