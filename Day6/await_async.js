const  hello=()=>{
    console.log("Hello Before")
    var times=1
    setInterval(()=>{
        console.log("This Is "+ times +" Times")
        times++;
    },2000)
    console.log("Hello After")
}
hello()