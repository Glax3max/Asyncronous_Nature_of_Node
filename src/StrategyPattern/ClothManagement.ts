interface ClothStrategy {
    washCloth(method:string):void;
    dryCloth(method:string):void;
    ironCloth(method:string):void;
}


class ClothManagement{
    constructor(private strategy:ClothStrategy) {}

    /**
     * Dry cloths
     */
    dryCloths(method:string) {
        this.strategy.dryCloth(method);
    }

    /**
     * Wash cloth
     */
    washCloths(method:string) {
        this.strategy.washCloth(method);
    }

    /**
     * Iron cloths
     */
    ironCloths(method:string) {
        this.strategy.ironCloth(method);
    }

    /**
     * Change strategy
     */
    changeStrategy(strategy:ClothStrategy) {
        this.strategy = strategy;
    }
}


class Machine implements ClothStrategy {
    /**
     * Wash cloth
     */
    washCloth(method:string):void {
        console.log(`This washing is done by ${method} method using the machine`);
    }

    /**
     * Iron cloths
     */

    ironCloth(method:string):void {
        console.log(`This ron is done by ${method} method using the machine`);
    }

    /**
     * Dry cloths
     */

    dryCloth(method:string):void {
        console.log(`This dry is done by ${method} method using the machine`);
    }
}


class HumanHelp implements ClothStrategy {
    /**
     * Wash cloth
     */
    washCloth(method:string):void {
        console.log(`This washing is done by ${method} method using the human help`);
    }

    /**
     * Iron cloths
     */

    ironCloth(method:string):void {
        console.log(`This ron is done by ${method} method using the human help`);
    }

    /**
     * Dry cloths
     */

    dryCloth(method:string):void {
        console.log(`This dry is done by ${method} method using the human help`);
    }
}


const clothManagement = new ClothManagement(new Machine());

clothManagement.dryCloths("Dryer")
clothManagement.ironCloths("Iron")
clothManagement.washCloths("washing machine")


clothManagement.changeStrategy(new HumanHelp())
clothManagement.dryCloths("Sun")
clothManagement.ironCloths("Hot water in the utensil")
clothManagement.washCloths("Human was")