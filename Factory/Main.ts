import { PizzaFactory } from "./Factory";

const pizzaFactory = new PizzaFactory();

const cheesePizza = pizzaFactory.createPizza('cheese');
if (cheesePizza) {
  cheesePizza.prepare();
  cheesePizza.bake();
  cheesePizza.cut();
  cheesePizza.box();
}

const pepperoniPizza = pizzaFactory.createPizza('pepperoni');
if (pepperoniPizza) {
  pepperoniPizza.prepare();
  pepperoniPizza.bake();
  pepperoniPizza.cut();
  pepperoniPizza.box();
}
