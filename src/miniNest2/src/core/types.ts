
/**
 * Constructor type its basically a type for the class that we will be passing to the container for registry and retrival
 */
export type Constructor<T = unknown> =  new (...args:any[])=>T;


/**
 * Making the Possible request method , so that these are the only methods that can be used
 */
export enum RequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}



/**
 * Meta data for the methods (get,put,post ...)
 */
export interface RouteMetadata {
    readonly method:string;
    readonly path:string;
}


/**
 * Represents a discoverable route.
 */
export interface RouteDefinition {
    readonly method: RequestMethod;
    readonly path: string;
    readonly controller: Constructor;
    readonly handler: string;
}


/**
 * Interface for the controller only
 */
export interface ControllerMetadata {
    readonly basePath:string;
}





