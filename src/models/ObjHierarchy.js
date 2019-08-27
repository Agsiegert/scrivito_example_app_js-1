import * as Scrivito from "scrivito";

class ObjHierarchy {
  constructor(obj) {
    this._obj = obj;
  }

  firstInOrder() {
    const obj = this._obj;
    const children = obj.children();
    const firstInOrderElement = obj
      .get("childOrder")
      .find(o => children.find(childObj => childObj.id() === o.id()));
    return firstInOrderElement || children[0];
  }
}

export function firstChildObj(page) {
  return new ObjHierarchy(page).firstInOrder();
}

export default ObjHierarchy;
