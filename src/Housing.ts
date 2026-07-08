interface GateWayStrategy{
    enteringGate(
        gateNumber:number,
        floor:number
    ):void;
}

class EnterTheHouse{
    constructor(
        private strategy: GateWayStrategy
    ){}

    /**
     * navigate 
     */
    enterTheGate(gateNumber:number,floor:number){
        this.strategy.enteringGate(gateNumber,floor);
    }

    /**
     * SetStrategy
     */
    setStrategy(
        strategy:GateWayStrategy
    ){
        this.strategy = strategy;
    }
}


class FirstGate implements GateWayStrategy {
    
    enteringGate(gateNumber:number,floor:number){
        console.log(`We entered first through ${gateNumber} gate on the floor ${floor}`);        
    }

}

class SecondGate implements GateWayStrategy {
    enteringGate(gateNumber:number,floor:number) {
        console.log(`We entered second through ${gateNumber} gate on the floor ${floor}`);        
    }
}


const house = new EnterTheHouse(new FirstGate());

house.enterTheGate(2,4);
house.setStrategy(new SecondGate());
house.enterTheGate(2,5);