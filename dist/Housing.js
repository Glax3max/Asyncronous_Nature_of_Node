"use strict";
class EnterTheHouse {
    strategy;
    constructor(strategy) {
        this.strategy = strategy;
    }
    enterTheGate(gateNumber, floor) {
        this.strategy.enteringGate(gateNumber, floor);
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
}
class FirstGate {
    enteringGate(gateNumber, floor) {
        console.log(`We entered first through ${gateNumber} gate on the floor ${floor}`);
    }
}
class SecondGate {
    enteringGate(gateNumber, floor) {
        console.log(`We entered second through ${gateNumber} gate on the floor ${floor}`);
    }
}
const house = new EnterTheHouse(new FirstGate());
house.enterTheGate(2, 4);
house.setStrategy(new SecondGate());
house.enterTheGate(2, 5);
//# sourceMappingURL=Housing.js.map