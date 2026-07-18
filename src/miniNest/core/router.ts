import { RequestMethod, RouteDefinition } from "./types";

class Router {
    private routes: RouteDefinition[] = [];

    /**
     * 
     * Register routes
     */
    register(route:RouteDefinition) {
        if(this.findRoute(route.method,route.path)) {
            throw new Error("Duplicate route");
        }
        this.routes.push(route);
    }

    /**
     * find route
     */
    findRoute(
        method:RequestMethod,
        path:string
    ):RouteDefinition|undefined{
        for(const route of this.routes) {
            if(route.method === method && route.path === path) {
                return route;
            } 
        }
    }
}