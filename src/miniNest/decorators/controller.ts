
function controller(path:string) {
    console.log("Hello")
    return function (
        constructor:Function
    ) {
        console.log(`Constructor : ${constructor}`)
    }
}

@controller("/path")
class UserController{
    get() {

    }
}