import EventBus from "./EventBus";

export default class GlobalEventBus extends EventBus {
  private static __instance: GlobalEventBus;
  constructor() {
    super();
    if (GlobalEventBus.__instance) {
      return GlobalEventBus.__instance;
    }
    GlobalEventBus.__instance = this;
  }
}
