import { Factory } from "./Factory";

let factoryTerrestre = new Factory("Terrestre")
let factoryActuatico = new Factory("Actuatico")

console.log(factoryActuatico.doSomething())
console.log(factoryTerrestre.doSomething())