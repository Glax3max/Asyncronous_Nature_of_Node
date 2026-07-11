class Container {
    /**
     * Creating the map to store the object so that it can be used to inject the dependency ,
     *  rather than creating the object for each class that requires and this map is our warehouse.
     */
    private services = new Map<string,unknown>();

    /**
     * Register function
     */
    register<T>(
        key:string,
        service:T
    ):void {
        this.services.set(key,service);
    }

    /**
     * Resolving function
     */
    resolve<T>(
        key:string
    ):T {
        
        const service = this.services.get(key);
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
container.register("log",new Logger());
container.register("config",new ConfigService());
container.register("db",new Database());
container.register("repo",new UserRepository());


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

const userServ = new UserService(container.resolve("log"),container.resolve("repo"));

userServ.print();