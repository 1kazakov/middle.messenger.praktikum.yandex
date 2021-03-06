export default class EventBus {
  listeners: {[key: string]: ((...args: any[]) => void)[]}
  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: (...args: any[]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: (...args: any[]) => void) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
    }
  }

	emit(event: string, ...args: any[]) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(function(listener) {
        listener(...args);
      });
    }
  }
}