import { Ioperador } from "./Ioperator";

export class Factory implements Ioperador{
    private name: string
    constructor(name: string) {
        this.name = name
    }

    doRecognize(): string {
        return `I am a ${this.name}`
    }
}