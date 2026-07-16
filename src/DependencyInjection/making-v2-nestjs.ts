import "reflect-metadata";

function Injectable() {
    return function(target:Function) {
        console.log(target.name)
    }
}

class Logger{}
@Injectable()
class UserService {
    constructor(
        private logger:Logger
    ){}

}

console.log(
    Reflect.getMetadata(
        "design:paramtypes",
        UserService
    )
)




// type Constructor<T> = new (...args:any[])=>T;

// class container2{

//     private service = new Map<Constructor<unknown>,unknown>();
//     private dependencies = new Map<Constructor<unknown>,Constructor<unknown>[]>();


//     /**
//      * Register
//      */
//     registerdependencies(
//         token:Constructor<unknown>,
//         services:Constructor<unknown>[]
//     ):void {
//         this.dependencies.set(token,services);
//     }

//     /**
//      * registerInstance
//      */
//     registerInstances(
//         token:Constructor<unknown>,
//         service:unknown
//     ):void {
//         this.service.set(token,service);
//     }

//     /**
//      * Resolve
//      */
//     resolve<T>(
//         token:Constructor<T>
//     ):T|unknown {
//         if(!this.service.has(token) && !this.dependencies.has(token)) {
//             throw new Error("Can't be resolved")
//         }
//         if(this.service.has(token)) {
//             return this.service.get(token);
//         }

//         const dependencyConstructor = this.dependencies.get(token)
//         const dependencyInstance = [];
//         if(dependencyConstructor === undefined) {
//             throw new Error("can't be resolved");
//         }
//         for(const dependency of dependencyConstructor){
//             dependencyInstance.push(this.resolve(dependency))
//         }
//         return new token(...dependencyInstance) ;
//     }

//     }