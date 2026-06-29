import { LogCreation, Logger, sayHello } from "./Try_Decorator";

@Logger
@sayHello
@LogCreation
class User{}


const obj = new User()