import EventBus from './EventBus';
import Templator from './templator';

export default class Block {
  props: any;
  template: string;
  eventBus: () => {
    emit: (arg: string) => void,
    //on: (arg: string) => void,
    //off: (arg: string) => void
  };
  templator: () => {
    compile(template: string, context: {[key: string]: any}): string,
  };

  private readonly EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  _element = null;
  _meta = null;

  constructor(tagName = "div", props = {}, template = '') {
    const eventBus = new EventBus();
    const templator = new Templator();
    this._meta = {
      tagName,
      props,
      template
    };

    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this.templator = () => templator;

    this._registerEvents(eventBus);
    eventBus.emit(this.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    eventBus.on(this.EVENTS.INIT, this.init.bind(this));
    eventBus.on(this.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(this.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(this.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(this.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(this.EVENTS.FLOW_RENDER);
  }

  componentDidMount() {}

  _componentDidUpdate() {
    const response: boolean = this.componentDidUpdate();
    if (response) {
      this.eventBus().emit(this.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate() {
    return true;
  }

  setProps = nextProps => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    
    this.eventBus().emit(this.EVENTS.FLOW_CDU);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element.innerHTML = block;
  }

  render() {
    return this.templator().compile(this._meta.template, this._meta.props)
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    return new Proxy(props, {
      get: (target, prop) => {
        const value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        if (target[prop] !== value) {

    console.log('typeof nextProps', typeof target)
    console.log('typeof ', target)
    console.log('proto', target.__proto__)
    console.log('prototype', target.prototype)
          target[prop] = value;
          this.eventBus().emit(this.EVENTS.FLOW_CDU);
          return true;
        }
        return false;
      },
      // deleteProperty(target: string, prop: any) {
      //   throw new Error('Нет доступа');
      // },
    })
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}