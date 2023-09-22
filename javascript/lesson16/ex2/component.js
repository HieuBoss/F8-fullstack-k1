var Component = {
  create: function (name, handle) {
    var componentFunction = function () {
      return Reflect.construct(HTMLElement, [], this.constructor);
    };
    componentFunction.prototype = Object.create(HTMLElement.prototype);
    componentFunction.prototype.constructor = componentFunction;
    componentFunction.prototype.connectedCallback = handle;

    customElements.define(name, componentFunction);
  },
};
