//map and filter
let array1=[1,2,3,4];
// let array2=array1.map(function(x){
//     return x*2;
// });
// let array2=array1.map(x=>x*2);

//filter

//using it in if condition  
let array2=array1.filter(x=>x%2==0);
console.log(array2);

//mera-example
let array3=array1.map(x=>x*3+4);
console.log(array3);
let filtering_array3=array1.filter(x=>x*2==4);
console.log(filtering_array3);