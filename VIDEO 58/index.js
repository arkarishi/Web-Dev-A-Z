function nice(name){
    console.log("Hey " + name +" you are nice!")
    console.log("Hey " + name +" you are good!")
    console.log("Hey " + name +" your tshirt is nice!")
    console.log("Hey " + name +" your course is good too!")
}

function sum(a,b,c=3) {
    return a+b+c
}
  
let result=sum(3,5)

console.log("The sum of these numbers is: ",result)