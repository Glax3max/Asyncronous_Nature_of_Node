"use strict";
class Container {
    services = new Map();
    register(token, service) {
        this.services.set(token, service);
    }
    resolve(token) {
        const service = this.services.get(token);
        if (!service) {
            throw new Error("Requested service does not exist");
        }
        return service;
    }
}
class Logger {
    print() {
        console.log("User logged in.");
    }
}
class ConfigService {
    print() {
        console.log("User Config.");
    }
}
class Database {
    print() {
        console.log("User Database.");
    }
}
class UserRepository {
    print() {
        console.log("User repo.");
    }
}
const container = new Container();
container.register(Logger, new Logger());
container.register(ConfigService, new ConfigService());
container.register(Database, new Database());
container.register(UserRepository, new UserRepository());
class UserService {
    logger;
    repo;
    constructor(logger, repo) {
        this.logger = logger;
        this.repo = repo;
    }
    print() {
        this.logger.print();
        this.repo.print();
    }
}
const userServ = new UserService(container.resolve(Logger), container.resolve(UserRepository));
userServ.print();
//# sourceMappingURL=1-Creating-map-for-DI.js.map