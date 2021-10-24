import { Factory } from "./Factory";

let factoryTerrestre = new Factory("Terrestre")
let factoryActuatico = new Factory("Actuatico")

console.log(factoryActuatico.doRecognize())
console.log(factoryTerrestre.doRecognize())