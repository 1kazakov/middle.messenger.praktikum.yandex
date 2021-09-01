import Route from "./route";

export default class Router {
  private static __instance: Router;
  routes: any[]
  history: any
  _currentRoute: any
  _rootQuery: string
  _blockProps: any

    constructor(rootQuery: any = '.app') {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname: string, block: any, props: any) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery, props});
        this.routes.push(route);
      return this;
    }

    start() {
    window.onpopstate = (event: any) => {
      event.preventDefault();
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
      const route = this.getRoute(pathname);

      if (this._currentRoute) {
        this._currentRoute.leave();
      }

      this._currentRoute = route;
      route.render();
    }

    go(pathname: string) {
      this.history.pushState({}, "", pathname);
      this._onRoute(pathname);
    }

    back() {
      this.history.back();
    }

    forward() {
      this.history.forward();
    }

    getRoute(pathname: string): any {
        return this.routes.find(route => route.match(pathname));
    }
}

