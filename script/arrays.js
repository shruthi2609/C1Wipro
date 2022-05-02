let studentDetails=["john","CS",9.0,"Wipro",false]
let studentNames=["john","henry","peter","john"]
/*console.log(studentDetails)
studentDetails[5]="XYZ"
console.log(studentDetails)
//for of  used for arrays
for(let studentDetail of studentDetails){
    if(studentDetail===9.0){
        continue 
    }
    console.log(studentDetail)
}
console.log("============================")
for(i=0;i<studentDetails.length;i++){
    if(studentDetails[i]===9.0){
        continue
    }
    else{
        console.log(studentDetails[i])
    }
}
//for each 
studentDetails.forEach(
function(ele,index)
{
if(ele===9.0){
    break
}
console.log(`${ele} is found at ${index} position`)
}
)
const res=studentNames.map(
function(item,index){
return item+"is the name and "+index+"is the index"
})


console.log(res)*/
const res=studentNames.find(
    function(item){
        return item==="john"
    }
)
console.log(res)
const res1=studentNames.filter(
    function(item){
        return item==="john"
    }
)
console.log(res1)




