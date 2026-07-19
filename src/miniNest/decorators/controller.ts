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

@Controller("/path")
class UserController{
    @Get("/cars")
    get() {

    }
}


