/*function sample(a,b){
    
return a+b
}

let res=sample(10,5)
console.log(res)*/


/*function display(){
    //console.log("hello javascript")
    return "hello javascript"
}
/*console.log(display)
const clone=display
console.log(clone())
console.log(display())
let msg=display()
console.log("the message received was "+msg)
function displayDetails(fname,age,company){

return {
    firstname:fname,
    empAge:age,
    employed:company
}
}

function displayData(a,b){

    return [a,b]
}
const empdata=displayDetails("peter",23,"Wipro")
console.log(empdata)
const nos=displayData(10,20)
console.log(nos)

function displayUser(role,email="xyz@gmail.com",username="default user"){
    return `the current user is ${username} and role is ${role} email is ${email}`
}
console.log(displayUser("admin"))

//function expression/NFE normed function expression

const clone=function sample(){
    console.log("sample")
    sample()
}
clone()

//arrow functions
const clone=fname=>`the firstname is ${fname}`

const second=(fname,age)=>{
   
    console.log("inside second func")
    return `the firstname is ${fname} ${age}`
}


console.log(clone("john"))
console.log(second("pete",30))*/
let a=+prompt("enter a value")
console.log(a,typeof a)








