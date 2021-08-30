import EventBus from './EventBus';
import GlobalEventBus from './global-event-bus';
import Templator from './templator';
import Validator from './validate';
import runEvents from './events';
import Store from './store';

export default class Block {
  props: any;
  template: string;
  eventBus: () => {
    emit: (arg: string) => void,
  };
  globalEventBus: () => {
    emit: (arg: string) => void,
    on: (event: string, callback: (...args: any[]) => void) => void
  };
  templator: () => {
    compile(template: string, context: {[key: string]: any}): HTMLElement,
  };
  validator: () => {
    run(action: string): any,
  };
  store: () => {
    getProps(path: string): any,
  };

  private readonly EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  _element: any | null
  _meta: any | null

  constructor(tagName = "div", props = {}, template = '') {
    this._element = null;
    const eventBus = new EventBus();
    const globalEventBus = new GlobalEventBus();
    const templator = new Templator();
    const validator = new Validator();
    const store = new Store();
    this._meta = {
      tagName,
      props,
      template
    };

    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this.globalEventBus = () => globalEventBus;
    this.templator = () => templator;
    this.validator = () => validator;
    this.store = () => store;

    this._registerEvents(eventBus);
    eventBus.emit(this.EVENTS.INIT);
  }

  _registerEvents(eventBus: any) {
    eventBus.on(this.EVENTS.INIT, this._init.bind(this));
    eventBus.on(this.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(this.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(this.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _init() {
    this._createResources();
    this.init()
    this.eventBus().emit(this.EVENTS.FLOW_CDM);
  }

  init() {}

  _componentDidMount() {
    // console.log('_componentDidMount')
    this.componentDidMount();
    this.eventBus().emit(this.EVENTS.FLOW_RENDER);
  }

  componentDidMount() {}

  _componentDidUpdate() {
    // console.log('_componentDidUpdate')
    const response: boolean = this.componentDidUpdate();
    if (response) {
      this._removeEvents();
      this.eventBus().emit(this.EVENTS.FLOW_CDM);
    }
  }

  componentDidUpdate() {
    return true;
  }

  setProps = (nextProps: object) => {
    if (!nextProps) {
      return;
    }
    // console.log()

    Object.assign(this.props, nextProps);
    
    this.eventBus().emit(this.EVENTS.FLOW_CDU);
  };

  get element() {
    return this._element;
  }

  _addEvents() {
    if (this.addEvents()) {
      this.validator().run('addEventListener');
    }
    if (Object.keys(this.props).includes('events')) {
      for (let dataAttrOfElement of Object.keys(this.props.events)) {
        Object.keys(this.props.events[dataAttrOfElement]).forEach(eventName => runEvents(dataAttrOfElement, eventName, this.props.events[dataAttrOfElement][eventName]))
      }
    }
  }

  addEvents() {
    return false;
  }

  _removeEvents() {
    if (this.removeEvents()) {
      this.validator().run('removeEventListener');
    }
    if (Object.keys(this.props).includes('events')) {
      for (let dataAttrOfElement of Object.keys(this.props.events)) {
        Object.keys(this.props.events[dataAttrOfElement]).forEach(eventName => runEvents(dataAttrOfElement, eventName, this.props.events[dataAttrOfElement][eventName], 'removeEventListener'))
      }
    }
  }

  removeEvents() {
    return false;
  }

  _render() {
    const block = this.render();
    // console.log('_render', 'block', block)
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element.innerHTML = '';
    this._element.append(block);
    setTimeout(this._addEvents.bind(this))
  }

  render() {
    return this.templator().compile(this._meta.template, this._meta.props)
  }

  getContent() {
    return this._element;
  }

  _makePropsProxy(props: any) {
    return new Proxy(props, {
      get: (target, prop) => {
        const value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        if (target[prop] !== value) {
          target[prop] = value;
          // this.eventBus().emit(this.EVENTS.FLOW_CDU);
          return true;
        }
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    })
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    console.log('HIDE')
    this._element.remove()
  }
}