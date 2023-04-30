console.time('Your code Took');
console.log("hello console");
console.log(4+30);
console.log(30/3);
console.log(90+6*7);
console.log(true);
console.log([40,50,60,70]);
console.log({
    harry:'this',
    marks:34 
})

console.table({
    harry:'this',
    marks:34
})

console.warn('this is a warn');
// console.clear();
/*javascript ignores semicolon */

console.timeEnd('Your code Took');
//console.assert(566>189,'Age > 189 is not possible');

console.error('This is an error');
for(let i=1;i<=10;i++){
    console.count(i);
}

function greet(){
    console.count();
}

greet();
greet();
greet();
greet();
greet();
console.timeEnd('your code took');

const spacing = '8px'; 
const mystyle =  
`padding: ${spacing}; background-color: white; color: blue ; font-style:
italic; border: 1px solid black dotted; font-size: 2em;`

console.log('%cCode With Harry', mystyle);
console.group('simple'); 
console.log('Grouped'); 
console.groupEnd('simple'); 
console.log('new section'); 
const color='red';
const style_me=`color: red; background-color: white ;border: 2px solid black;`
console.log('%caradhana',style_me);
