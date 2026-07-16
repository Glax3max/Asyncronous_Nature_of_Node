"use strict";
class ClothManagement {
    strategy;
    constructor(strategy) {
        this.strategy = strategy;
    }
    dryCloths(method) {
        this.strategy.dryCloth(method);
    }
    washCloths(method) {
        this.strategy.washCloth(method);
    }
    ironCloths(method) {
        this.strategy.ironCloth(method);
    }
    changeStrategy(strategy) {
        this.strategy = strategy;
    }
}
class Machine {
    washCloth(method) {
        console.log(`This washing is done by ${method} method using the machine`);
    }
    ironCloth(method) {
        console.log(`This ron is done by ${method} method using the machine`);
    }
    dryCloth(method) {
        console.log(`This dry is done by ${method} method using the machine`);
    }
}
class HumanHelp {
    washCloth(method) {
        console.log(`This washing is done by ${method} method using the human help`);
    }
    ironCloth(method) {
        console.log(`This ron is done by ${method} method using the human help`);
    }
    dryCloth(method) {
        console.log(`This dry is done by ${method} method using the human help`);
    }
}
const clothManagement = new ClothManagement(new Machine());
clothManagement.dryCloths("Dryer");
clothManagement.ironCloths("Iron");
clothManagement.washCloths("washing machine");
clothManagement.changeStrategy(new HumanHelp());
clothManagement.dryCloths("Sun");
clothManagement.ironCloths("Hot water in the utensil");
clothManagement.washCloths("Human was");
//# sourceMappingURL=ClothManagement.js.map