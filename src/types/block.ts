type Block  = {  props: any;
  template: string
  eventBus: () => {
    emit: (arg: string) => void
    on: (arg: string) => void
    off: (arg: string) => void
  }
  templator: () => {
    compile(template: string, context: {[key: string]: any}): string
  }
  _registerEvents(eventBus: any): void
  _createResources(): void
  init(): void
  _componentDidMount(): void
  componentDidMount(): void
  _componentDidUpdate(): void
  componentDidUpdate(): boolean
  setProps(nextProps: {[key: string]: string}): void
  _render(): void
  render(): string
  getContent(): any
  _makePropsProxy(prop: {[key: string]: string}): any
  _createDocumentElement(tagName: string): void
  show():void
  hide():void
}

export default Block;