import { RouteDefinition } from './../core/types';
import "reflect-metadata";
function Get(path:string) {
    return function(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ) {
        Reflect.defineMetadata(
         "route",
         {
            method:"GET",
            path
         },
          target,
          propertyKey
        )
    }
}

function Controller(path:string) {
    return function (
        constructor:Function
    ) {
        Reflect.defineMetadata(
            "basePath",
            path,
            constructor,
        )
    }
}


function callMappingMethod(classDetail:Function):void{
    const methods = Object.getOwnPropertyNames(classDetail.prototype);

    methods.forEach((method)=> {
        if(method != "constructor" ) {
            console.log(Reflect.getMetadata("route",classDetail.prototype,method))
        } 
    })

}
@Controller("/path")
class UserController{
    @Get("/cars")
    get() {
        console.log("hello")
    }
    
    @Get("/scar")
    get2() {
        console.log("Hello")
    }
}


// callMappingMethod(UserController);

/**
 * Bootstraping the userController
 */
function bootStrap(userCon:Function) {
    const baseUrl = Reflect.getMetadata("basePath",userCon);
    const methods = Object.getOwnPropertyNames(userCon.prototype);
    const RouteDefinition:RouteDefinition[] = [];
    for(const method of methods) {
        if(method === "constructor") continue;
        const methodObj = Reflect.getMetadata("route",userCon.prototype,method)
        const url = baseUrl + methodObj.path;
        const routeObj:RouteDefinition = {
            method:methodObj.method,
            path:url,
            controller:userCon,
            handler:method
        } 
        console.log(`Path: ${url}   method:${methodObj.method}`)
    }
}

bootStrap(UserController);