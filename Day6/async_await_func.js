const func=()=>{
    return new Promise((resolve,reject)=>{
        var times=1
        setTimeout(()=>{
            console.log("This Is "+ times +" Times")
            times++;
            resolve("Sucuessfuly Done")
        },3000)
    })
}

const  hello=async()=>{
    console.log("Hello Before")
    await func()
    console.log("Hello After")
}

hello()