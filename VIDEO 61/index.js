let random = Math.random(); 
console.log(random);

let a = prompt("Enter first number"); // Convert input to number
let c = prompt("Enter operation"); // Use 'let' so it can be reassigned
let b = prompt("Enter second number"); // Convert input to number

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

if (random > 0.1) {
    // Perform correct calculation
    console.log('The result is a ${a} ${b} ${c}')
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
    // Perform wrong calculation
    c = obj[c]; // Now c can be changed
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}