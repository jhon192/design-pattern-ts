import { Pizza } from "./Pizza";

export class CheesePizza implements Pizza {
    prepare() {
      console.log('Preparing cheese pizza...');
    }
    bake() {
      console.log('Baking cheese pizza...');
    }
    cut() {
      console.log('Cutting cheese pizza...');
    }
    box() {
      console.log('Boxing cheese pizza...');
    }
  }