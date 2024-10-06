import { Ford, Honda, Toyota } from "./CarClass";

export class Facade {
    protected ford: Ford;
    protected toyota: Toyota;
    protected honda: Honda;

    /**
     * Constructor
     * @param {Ford} ford
     * @param {Toyota} toyota
     * @param {Honda} honda
     */
    constructor() {
        this.ford = new Ford();
        this.toyota = new Toyota();
        this.honda = new Honda();
    }

    /**
     * Method to operate a Ford car
     */
    public FordOperator() {
        this.ford.Operator();
    }

    /**
     * Method to operate a Toyota car
     */

    public ToyotaOperator() {
        this.toyota.Operator();
    }

    /**
     * Method to operate a Honda car
     */

    public HondaOperator() {
        this.honda.Operator();
    }


}