interface RouteStrategy {
    calculateRoute(source: string, destination: string): void;
}

class CarRoute2 implements RouteStrategy {
    calculateRoute(source: string, destination: string): void {
        console.log(`🚗 Driving from ${source} to ${destination}`);
    }
}

class BikeRoute2 implements RouteStrategy{
    calculateRoute(source: string,destination: string): void {
        console.log(`Riding from ${source} to ${destination}`);
    }
}

class metroRoute2 implements RouteStrategy {
    calculateRoute(source: string, destination: string):void {
        console.log(`Going by metro from ${source} to ${destination}`)
    }
}
class Navigation2 {
    constructor(private strategy: RouteStrategy) {}

    navigate(source: string, destination: string): void {
        this.strategy.calculateRoute(source, destination);
    }

    setStrategy(strategy: RouteStrategy): void {
        this.strategy = strategy;
    }
}

// Creating Object of navigation and using the car route
const nav = new Navigation2(new CarRoute2())
nav.navigate("Noida","Delhi")

// Using bike route
nav.setStrategy(new BikeRoute2());
nav.navigate("Dwarka","Gurgaon");

// using metro route
nav.setStrategy(new metroRoute2())
nav.navigate("Chandani","Chowk");