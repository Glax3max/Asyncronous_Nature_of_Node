type constructor<T = unknown> = new (...args:any[])=>T;

enum RequestMethod {
    GET,
    POST,
    PUT,
    PATCH,
    DELETE
}