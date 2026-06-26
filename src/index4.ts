// Promise.race() implementation
async function customPromiseRace<T> (promises:(Promise<T>|T)[]):Promise<T> {
    return new Promise((resolve,reject)=> {
        if(promises.length === 0) {
            return reject(new Error("No promise to settle"))
        }
        promises.forEach((promise,index)=> {
        
            Promise.resolve(promise).then((value)=> {
                return resolve(value);
            }).catch((err)=> {
               return reject(err);
            })
        })
    })
}

const promise0222 = async ()=>{throw new Error("Error1")};
const promise0111 = async ()=>{throw new Error("Error2")};
const promise0333= async ()=>{throw new Error("Error3")};

customPromiseRace([]).then((val)=> {
    console.log(val);
})