import { CheesePizza } from "./CheesePizza";
import { PepperoniPizza } from "./PepperoniPizza ";
import { Pizza } from "./Pizza";
import { VeggiePizza } from "./VeggiePizza ";

export class PizzaFactory {
    public createPizza(type: string): Pizza | null {
      if (type === 'cheese') {
        return new CheesePizza();
      } else if (type === 'pepperoni') {
        return new PepperoniPizza();
      } else if (type === 'veggie') {
        return new VeggiePizza();
      } else {
        console.log('Pizza type not found');
        return null;
      }
    }
  }