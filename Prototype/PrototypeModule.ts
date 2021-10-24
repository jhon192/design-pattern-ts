import { IPrototype } from "./IPrototype";

export class PrototypeModule implements IPrototype {
  name: string | undefined;
  constructor() {}
  
  showName = (name: string) => {
    this.name = name
    return `You name is ${this.name}`
  }
  
  clone(): this {
    const clone = (<any>Object).assign({}, this); // shallow copy
    // const clone = JSON.parse(JSON.stringify(this)) // deep copy
    return clone;
  }
}
