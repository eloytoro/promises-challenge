class Component {
  draw() {
    return $('<div />');
  }

  update() {
    this.mount(this.parent, this.node);
  }

  getContents() {
    return [];
  }

  mount(target, old) {
    this.node = this.draw();
    this.parent = target;
    if (old) {
      this.node.insertAfter(old);
      old.remove();
    } else {
      target.append(this.node);
    }
    const contents = this.getContents();
    (contents instanceof Array ? contents : [contents])
      .forEach((child, index) => {
        if (child instanceof Component) {
          child.mount(this.node);
        } else {
          this.node.append(child);
        }
      });
  }
};

module.exports = Component;
