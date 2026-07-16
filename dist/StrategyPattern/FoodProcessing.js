"use strict";
class FoodProcessing {
    foodStrategy;
    constructor(foodStrategy) {
        this.foodStrategy = foodStrategy;
    }
    foodCleaning(food) {
        this.foodStrategy.foodCleaning(food);
    }
    foodStoring(food) {
        this.foodStrategy.foodStoring(food);
    }
    changeStrategy(strategy) {
        this.foodStrategy = strategy;
    }
}
class DairyProduct {
    foodCleaning(food) {
        console.log(`There is no cleaning for ${food} and for the paneer we need to wash it with cold water.`);
    }
    foodStoring(food) {
        console.log(`Storage of ${food} should be in the air tight pack.`);
    }
}
class Fruits {
    foodCleaning(food) {
        console.log(`${food} should be cleaned with clean water`);
    }
    foodStoring(food) {
        console.log(`${food} should be stored in the fruits section in the refrigirator`);
    }
}
const foodProcessing = new FoodProcessing(new Fruits());
foodProcessing.foodCleaning("apple");
foodProcessing.changeStrategy(new DairyProduct());
foodProcessing.foodStoring("Milk");
//# sourceMappingURL=FoodProcessing.js.map