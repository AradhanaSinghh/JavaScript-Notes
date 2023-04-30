//spread and rest operator(...)

//spread operator
let person={
    name:"Aradhana",
    age:20
}

let newPerson={
    ...person,
    city:"jhajjar"
}

console.log(newPerson);

//rest operator
function hello(...all){
    console.log(all);
}

hello(1,2,3);