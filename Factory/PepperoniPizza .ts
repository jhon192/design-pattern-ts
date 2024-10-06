import { Pizza } from "./Pizza";

export class PepperoniPizza implements Pizza {
    prepare() {
      console.log('Preparing pepperoni pizza...');
    }
    bake() {
      console.log('Baking pepperoni pizza...');
    }
    cut() {
      console.log('Cutting pepperoni pizza...');
    }
    box() {
      console.log('Boxing pepperoni pizza...');
    }
  }
  
  