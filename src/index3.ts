type SettledResult<T> = {status:"fulfilled";value:T}|{status:"rejected";value:any}
 
async function promiseAllSettled<T>(promises:(Promise<T>|T)[]):Promise<SettledResult<T>[]> {
    return new Promise((resolve,reject)=> { 
        if(promises.length === 0) resolve([])
        const result:SettledResult<T>[] = [];
        let completedPromise = 0;

        promises.forEach((promise,index)=> {
            Promise.resolve(promise).then((val)=> {
                result[index] = {status:"fulfilled",value:val}
                completedPromise++;
            })
            .catch((err)=> {
                completedPromise++;
                result[index] = {status:"rejected",value:err};
            })
            .finally(()=> {
                if(completedPromise === promises.length) resolve(result);
            });
        });
    });
}

const promise011 = async ()=>({id:1,value:"Promise1"});
const promise022 = async ()=>{throw new Error("Error2")};
const promise033 = async ()=>{throw new Error("Error3")};

promiseAllSettled([promise011(),promise022(),promise033()]).then((val)=> {
    console.log(val);
})