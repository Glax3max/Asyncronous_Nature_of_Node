async function customePromiseAll5<T>(promises:(Promise<T> | T)[]):Promise<T[]> {
    return new Promise((resolve,reject)=> {
      const results:T[] = [];
      let completedPromise = 0;

      promises.forEach((promise,index)=> {
        Promise.resolve(promise).then((data)=> {
          results[index] = data;
          completedPromise++;

          if(completedPromise == promises.length) {
            resolve(results);
          }
        })
        .catch((err)=> {
          reject(err);
        });
      });

      if(promises.length == 0) resolve([])
    });
}
const promise1 = async ()=>({id:1,value:"Promise1"})
const promise2 = async ()=>({id:2,value:"Promise2"})
const promise3 = async ()=>({id:3,value:"Promise3"})

customePromiseAll5([promise1(),promise2(),promise3()]).then((value)=> {
  value.forEach((data:any,index)=> {
    console.log(data.value,"  -> ",index);
  })
})