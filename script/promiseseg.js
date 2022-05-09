/*let getUser=new Promise(
    (resolve,reject)=>{
        let user={
            fname:"joe",
            email:"joe@gl.com"
        }
       setTimeout(()=>resolve(user),3000)
    }
)
getUser.then((result)=>console.log(result))

let showUser=new Promise(
    (resolve,reject)=>{
        let user={
            fname:"joe"
        };
        user?resolve(user):reject(new Error("user not fetched"))
    }
)
showUser.then((result)=>console.log(result))
showUser.catch((err)=>console.log(err.message))*/
let showUser=new Promise(
    (resolve,reject)=>{
        let user={
            fname:"joe",
            role:"trainee"
        };
        user?resolve(user):reject(new Error("user not fetched"))
    }
)
/*showUser.then((result)=>{return result}).then((res)=>console.log(res))*/

showUser.then((result)=>{
    return new Promise(
        (resolve,reject)=>{
            let user={
                fname:"joe"
            }
            if(user.role!=="admin"){
                reject(new Error("you are not allowed"))
            }
            else{
                resolve("access granted")
            }
    })
}).then((res)=>console.log(res)).catch((err)=>console.log(err.message)).finally(()=>console.log("end"))

showUser.catch((err)=>console.log(err.message))









//pending , resolve , reject