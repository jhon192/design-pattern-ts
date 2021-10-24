import { PrototypeModule } from "./PrototypeModule";

const p1 = new PrototypeModule()
const p2 = p1.clone()
const p3 = p1.clone()
p1.name = "jhon"
p2.name = "juan"
p3.name = "juana"

console.log(p1.showName(p1.name))
console.log(p2.showName(p2.name))
console.log(p3.showName(p3.name))
