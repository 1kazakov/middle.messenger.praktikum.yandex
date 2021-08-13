export default (dataAttr: string, eventName: string, event: (evt: any) => void, action: string = 'addEventListener') => {
  const elements: any[] = [...document.querySelectorAll(`#${dataAttr}`)];
  console.log(elements)
  if (elements.length) {
    elements.forEach(element => element[action](eventName, event))
  }
}
