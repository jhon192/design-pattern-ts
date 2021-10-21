import { Singleton } from "./Singleton"

// Create various instances
let s1 = Singleton.getInstance()
let s2 = Singleton.getInstance()

// Verify the instances
console.log(Singleton.verifyInstance(s1, s2))