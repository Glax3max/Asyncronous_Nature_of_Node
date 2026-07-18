type constructor<T = unknown> = new (...args:any[])=>T;
type constructor3<T = unknown> = new (...args:any[])=>T;
enum RequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}

console.log(RequestMethod.DELETE)