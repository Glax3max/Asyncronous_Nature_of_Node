/**
 * Decorator runs when class is created not when an object is created.
 */
export function Logger(constructor:Function) {
    console.log("Decorator Executed");
    console.log(constructor);
}


export function sayHello(constructor:Function) {
    console.log("Hello")
}

/**
 * Creating a decorator for logs when any service or controller is created
 */

export function LogCreation<T extends new (...args:any[])=> any>(
    constructor:T
) {
    return class extends constructor {
        constructor(...args:any[]) {
            console.log(`${constructor.name} Created`);
            super(...args);
        }
    };
}