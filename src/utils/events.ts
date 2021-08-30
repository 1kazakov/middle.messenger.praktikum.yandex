export default (className: string, eventName: string, event: (evt: any) => void, action: string = 'addEventListener') => {
  const elements: any[] = [...document.querySelectorAll(`.${className}`)];
  console.log(elements)
  if (elements.length) {
    elements.forEach(element => element[action](eventName, event))
  }
}
