type Constructor<T = unknown> = new (...args:any[])=>T;

export enum RequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}

export interface RouteDefinition {
    method: RequestMethod;
    path: string;
    controller: Constructor;
    handler: string;
}
