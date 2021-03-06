import renderBlock from "./render";

export default class Route {
  _pathname: string
  _blockClass: any
  _block: any
  _props: any

  constructor(pathname: string, view: any, props: any) {
      this._pathname = pathname;
      this._blockClass = view;
      this._block = null;
      this._props = props;
  }

  navigate(pathname: string) {
      if (this.match(pathname)) {
          this._pathname = pathname;
          this.render();
      }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
      return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props.props);
      renderBlock(this._props.rootQuery, this._block);
    }
    renderBlock(this._props.rootQuery, this._block);
  }
}