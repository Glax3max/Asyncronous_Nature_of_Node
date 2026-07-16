"use strict";
class Navigate {
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
class CarRoute {
    calculateRoute(source, destination) {
        console.log("Calculating fastest car route");
    }
}
class BikeRoute {
    calculateRoute(source, destination) {
        console.log("Calculating fastest bike route");
    }
}
class WalkRoute {
    calculateRoute(source, destination) {
        console.log("Calculating fastest walking route");
    }
}
class MetroRoute {
    calculateRoute(source, destination) {
        console.log("Calculating fastest metro route");
    }
}
const navigate = new Navigate(new WalkRoute());
navigate.navigate("Delhi", "Noida");
navigate.setStrategy(new CarRoute());
navigate.navigate("Gazibad", "Noida");
//# sourceMappingURL=NavigationSystem.js.map