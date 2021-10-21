import { Ioperador } from "./Ioperator";

export class Factory implements Ioperador{
    private name: string
    constructor(name: string) {
        this.name = name
    }

    doSomething(): any {
        return `I am a ${this.name}`
    }
}