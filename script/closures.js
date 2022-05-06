/*function basicDetails(){
    let fname="john"
    function extraInfo(c){
        let cgpa=c
        console.log(`${fname} has secured ${cgpa}`)
    }
    fname="Johan"
    return extraInfo
    
}
const outside=basicDetails()
outside(9.5)*/
let studentOne={
    fname:"john",
    cgpa:9.0,
    display:function(){
        console.log(`${this.fname} is the student name`)
    },
    displaycgpa:function(){
        console.log(`${this.cgpa} is the student cgpa`)
    }

}
let studentThree={
    welcome:function(){
        console.log("welcome freshers")
    }
}
let studentTwo={
    fname:"peter",
    cgpa:8.5
}
let boundedobj=studentOne.display.bind(studentTwo)
let cgpabound=studentOne.displaycgpa.bind(studentTwo)
let welcomebound=studentThree.welcome.bind(studentTwo)
boundedobj()
welcomebound()
cgpabound()












