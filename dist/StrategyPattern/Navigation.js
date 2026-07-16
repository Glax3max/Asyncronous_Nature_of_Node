"use strict";
class CarRoute2 {
    calculateRoute(source, destination) {
        console.log(`🚗 Driving from ${source} to ${destination}`);
    }
}
class BikeRoute2 {
    calculateRoute(source, destination) {
        console.log(`Riding from ${source} to ${destination}`);
    }
}
class metroRoute2 {
    calculateRoute(source, destination) {
        console.log(`Going by metro from ${source} to ${destination}`);
    }
}
class Navigation2 {
    strategy;
    constructor(strategy) {
        this.strategy = strategy;
    }
    navigate(source, destination) {
        this.strategy.calculateRoute(source, destination);
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
}
const nav = new Navigation2(new CarRoute2());
nav.navigate("Noida", "Delhi");
nav.setStrategy(new BikeRoute2());
nav.navigate("Dwarka", "Gurgaon");
nav.setStrategy(new metroRoute2());
nav.navigate("Chandani", "Chowk");
//# sourceMappingURL=Navigation.js.map