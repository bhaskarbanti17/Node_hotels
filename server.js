// console.log("server started")
// console.log("dd")

// function add(a,b){
//     return a+b;
// }

// console.log(add(3 ,5))

// var divide = (a, b) => a/b;

// var mul = (a, b) =>{
//     return a*b;
// }

// console.log(mul(2,9));
// console.log(divide(9,2));

// (function(){
//     console.log('this is a self call function');     // this is a self call function

// })
// ();

// function callback(){
//     console.log("callback funtion has been called. ");
// }

// function add_plus_callback(a , b, callback){
//     console.log("result =", a+b);

//     callback();
// }

// add_plus_callback(3 ,6, callback);

/// anather way to write function
// add_plus_callback(3 ,6, ()=> console.log("add completed"));


const objectToconvert = {
    name: "alice",
    age: 23
};
console.log(objectToconvert);

const json = JSON.stringify(objectToconvert);
console.log(typeof(json))