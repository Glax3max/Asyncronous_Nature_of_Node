class container {
    /**
     * Creating the map to store the object so that it can be used to inject the dependency ,
     *  rather than creating the object for each class that requires and this map is our warehouse.
     */
    private services = new Map<string,unknown>();

    /**
     * Register function
     */
    register<T>(
        key:string,
        service:T
    ):void {
        this.services.set(key,service);
    }

    /**
     * Resolving function
     */
    resolve<T>(
        key:string
    ):T {
        
        const service = this.services.get(key);
        if(!service) {
            throw new Error("Requested service does not exist");
        }

        return service as T;
    }
}