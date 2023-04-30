//reference (array,object) and primitive type (string,number)
// primitive type
let num1=100;
let num2=num1;
num2=50;
console.log(num2);
console.log(num1);

// reference type
let person={
    name:"aradhana"
}
let person2={
    ...person,
}
// person2=person;//for copy 
// person2.name="ajit"; //will change person value also
console.log(person);
console.log(person2);