interface RouteStrategy{
    calculateRoute(
        source:string,
        destination:string
    ):void;
}
class Navigate {
    constructor(
        private strategy: RouteStrategy
    ){}

    /**
     * Navigate methode
     */
    navigate(
        source:string,
        destination:string
    ){
        this.strategy.calculateRoute(source,destination);
    }

    /**
     * SetStrategy
     */
    setStrategy(
        strategy:RouteStrategy
    ) {
        this.strategy = strategy
    }
}



class CarRoute implements RouteStrategy{
    /**
     * Calculating the route
     */
    calculateRoute(source:string,destination:string):void {
        console.log("Calculating fastest car route");
        
    }
}


class BikeRoute implements RouteStrategy{

    /**
     * Calculating the route
     */
    calculateRoute(source:string,destination:string):void {
        console.log("Calculating fastest bike route");
    }
}


class WalkRoute implements RouteStrategy{

    /**
     * Calculating the route
     */
    calculateRoute(source:string,destination:string):void {
        console.log("Calculating fastest walking route");
    }
}


class MetroRoute implements RouteStrategy{

    /**
     * Calculating the route
     */
    calculateRoute(source:string,destination:string):void {
        console.log("Calculating fastest metro route");
    }
}



const navigate = new Navigate(new WalkRoute())
navigate.navigate("Delhi","Noida");
navigate.setStrategy(new CarRoute());
navigate.navigate("Gazibad","Noida")