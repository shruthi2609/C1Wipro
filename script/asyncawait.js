/*async function fetchData(userId){
    if(userId===1){
        return {fname:"joe",email:"joe@gmail.com"}
    }
}*/
function fetchData(userId){
    if(userId===1){
        let user;
        return new Promise((resolve,reject)=>{
            user?resolve(user):reject(new Error("user not fetched"))
        })
    }
}
//fetchData(1).then((res)=>console.log(res))
async function caller(){
    try{
        const result=await fetchData(1)
        console.log(result)
    }
    catch(e){
        console.log(e.message)
    } 
    finally{
        console.log("end")
    }
}
caller()
