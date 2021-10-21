export class Singleton {

  // Create a private attribute
  private static instance: Singleton;

  // privatize the constructor
  private constructor() {}

  // create a public method that's the only way of getting the Singleton 
  public static getInstance(): Singleton {
    if (this.instance === null) {
      this.instance = new Singleton();
    }

    return this.instance;
  }

  // this is a opcional method that return true if two instance is the same
  public static verifyInstance(first_instance: Singleton, second_instance: Singleton): any {
    if (first_instance === second_instance) {
      return "the two instance are the same"
    } else {
        return "the two instance are difference"
    }
  }
}
