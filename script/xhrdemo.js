/*function getData(){
    let responseData;
    const xhr=new XMLHttpRequest()
    xhr.open('GET','http://localhost:3001/employeeDetails')
    xhr.onload=function(){
      //  console.log(xhr.response)
        const normalobj=JSON.parse(xhr.response)
        console.log(normalobj)
       // console.log(JSON.stringify(normalobj))
    }
    xhr.onerror=function(){
        console.log("network error")
    }
    xhr.send() 
}
getData()*/
function postData(){
    const xhr=new XMLHttpRequest()
    xhr.open('POST',"http://localhost:3001/employeeDetails")
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.onload=function(){
        console.log(xhr.response)
    }
    xhr.onerror=function(){
        console.log("netwrok error")
    }
    const data={
        "id": 7,
        "fname": "shruthi",
        "email": "shruthi@gmail.com",
        "role": "trainer"
    }
    xhr.send(JSON.stringify(data))
}
postData()