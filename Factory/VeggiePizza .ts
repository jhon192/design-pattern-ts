import { Pizza } from "./Pizza";

export class VeggiePizza implements Pizza {
    prepare() {
      console.log('Preparing veggie pizza...');
    }
    bake() {
      console.log('Baking veggie pizza...');
    }
    cut() {
      console.log('Cutting veggie pizza...');
    }
    box() {
      console.log('Boxing veggie pizza...');
    }
  }
  