import * as fs  from "node:fs/promises";



async function func() {
    const  data = await fs.readFile("index.txt","utf-8").then((data)=> {
        console.log(data)
    })

    const file = await fs.open("./index.txt");
    for await (const chunk of file.readableWebStream())
    console.log
}

func();