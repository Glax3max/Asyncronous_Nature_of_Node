function Get(path:string) {

    return function(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ) {
        console.log(target);
console.log(
    Object.getOwnPropertyNames(target)
);
    }
} 

class UserController{

    constructor(){}

    @Get("/")
    getUser() {
        console.log("get request")
    }

}

const uc = new UserController();
uc.getUser()