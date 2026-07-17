export class Container {
    /**
     * Creating the map to store the object so that it can be used to inject the dependency ,
     *  rather than creating the object for each class that requires and this map is our warehouse.
     */
    private services = new Map<new (...args:any[])=>unknown,unknown>();

    /**
     * Register function
     */
    register<T>(
        token:new (...args:any[])=>T,
        service:T
    ):void {
        this.services.set(token,service);
    }

    /**
     * Resolving function
     */
    resolve<T>(
        token:new (...args:any[])=>T
    ):T {
        
        const service = this.services.get(token);
        if(!service) {
            throw new Error("Requested service does not exist");
        }

        return service as T;
    }
}
