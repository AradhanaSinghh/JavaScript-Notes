//array destructuring
let list=["audi","bmw","honda"];
// let [car1,car2,car3]=list;
let [car1, ,car2]=list;
console.log(car2);
//object destructuring
const person={
    name:"aradhana",
    age:20
}

let {name,age}=person;
// console.log(person.age);
console.log(age);