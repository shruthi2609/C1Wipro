//get method
/*function getData(){
 fetch("http://localhost:3001/employeeDetails").then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))
}
getData()
function postData(){
    const data={
        id: 10,
        fname: "xyz",
        email: "xyz@gmail.com",
        role: "HR"
    }
    const url="http://localhost:3001/employeeDetails"
 fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))
}
postData()
function updateData(){
    const url="http://localhost:3001/employeeDetails/2"
    const data={
        empEmail: "johnhenry@gmail.com",
    }
    fetch(url,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))
}
updateData()
function updateData(){
    const url="http://localhost:3001/employeeDetails/2"
    const data={
            "id": 2,
            "empName": "JOHNHENRY",
            "empEmail": "johnhenry@gmail.com",
            "empRole": "Trainer"
    }
    fetch(url,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))
}
updateData()
function deleteData(){
    fetch("http://localhost:3001/employeeDetails/2",{
        method:'DELETE'
    }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))
}
deleteData()*/


