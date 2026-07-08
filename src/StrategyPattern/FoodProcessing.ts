interface FoodStrategy{
    foodCleaning(food:string):void;
    foodStoring(food:string):void;
}

class FoodProcessing{
    constructor(
        private foodStrategy:FoodStrategy
    ){}

    /**
     * Cleaning foods
     */
    foodCleaning(food:string){
        this.foodStrategy.foodCleaning(food);
    }

    /**
     * Storing food
     */
    foodStoring(food:string) {
        this.foodStrategy.foodStoring(food);
    }

    /**
     * Strategy
     */
    changeStrategy(strategy:FoodStrategy){
        this.foodStrategy = strategy;
    }
}


class DairyProduct implements FoodStrategy {
    /**
     * Clean of food
     */
    foodCleaning(food:string) {
        console.log(`There is no cleaning for ${food} and for the paneer we need to wash it with cold water.`)
    }

    /**
     * Storing food
     */
    foodStoring(food:string) {
        console.log(`Storage of ${food} should be in the air tight pack.`)
    } 
}

class Fruits implements FoodStrategy {
    /**
     * cleaning food
     */
    foodCleaning(food:string) {
        console.log(`${food} should be cleaned with clean water`)
    }

    /**
     * Storing
     */
    foodStoring(food:string) {
        console.log(`${food} should be stored in the fruits section in the refrigirator`)
    }
}


const foodProcessing = new FoodProcessing(new Fruits());
foodProcessing.foodCleaning("apple")
foodProcessing.changeStrategy(new DairyProduct());
foodProcessing.foodStoring("Milk")