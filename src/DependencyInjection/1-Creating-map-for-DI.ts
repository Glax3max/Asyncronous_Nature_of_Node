class Container {
    /**
     * Creating the map to store the object so that it can be used to inject the dependency ,
     *  rather than creating the object for each class that requires and this map is our warehouse.
     */
    private services = new Map<new (...args:any[])=>unknown,unknown>();

    /**
     * Register function
     */
    register<T>(
        token:new (...args:any[])=>T,
        service:T
    ):void {
        this.services.set(token,service);
    }

    /**
     * Resolving function
     */
    resolve<T>(
        token:new (...args:any[])=>T
    ):T {
        
        const service = this.services.get(token);
        if(!service) {
            throw new Error("Requested service does not exist");
        }

        return service as T;
    }
}

class Logger {
    print():void{
        console.log("User logged in.")
    }
}

class ConfigService {
    print():void{
        console.log("User Config.")
    }
}

class Database {
    print():void{
        console.log("User Database.")
    }
}



class UserRepository {
    print():void{
        console.log("User repo.")
    }
}

const container = new Container();
container.register(Logger,new Logger());
container.register(ConfigService,new ConfigService());
container.register(Database,new Database());
container.register(UserRepository,new UserRepository());


class UserService {
    constructor(
        private readonly logger:Logger,
        private readonly repo:UserRepository
    ){}

    print():void{
        this.logger.print();
        this.repo.print();
    }
}

const userServ = new UserService(container.resolve(Logger),container.resolve(UserRepository));

userServ.print();