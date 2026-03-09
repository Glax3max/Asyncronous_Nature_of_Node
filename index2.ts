// Promise.any() implemetation

async function customePromiseAny<T>(promises:(Promise<T>|T)[]):Promise<T> {
    return new Promise((resolve,reject)=> {
        
        if(promises.length === 0) {
           return reject(new AggregateError([], "All promises were rejected"));
        }

        const errors: any[] = [];
        let rejectedCount = 0;

        promises.forEach((p,index)=> {

            Promise.resolve(p)
                .then(resolve)
                .catch((err)=> {

                    errors[index] = err;
                    rejectedCount++;

                    if(rejectedCount === promises.length) {
                        reject(new AggregateError(errors,"All promises were rejected"));
                    }

                });
            
        });

    });
}

const promise01 = async ()=>({id:1,value:"Promise1"});
const promise02 = async ()=>{throw new Error("Error2")};
const promise03 = async ()=>{throw new Error("Error3")};

customePromiseAny([promise01(),promise02(),promise03()]).then((val)=> {
    console.log(val);
})