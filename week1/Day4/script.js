// let num = [1,2,3,4,5];

// let multipleoftwo = even.map((value)=>value*2);
// console.log(even);

// let num = [1,2,3,4,5,6,7];

// num.filter((v)=>v%2 === 0);


// let num = [1,2,3,4,5,6,7];
// let a = 0;
// let sum = num.map((v)=>{
//     a  += v;
//     return a;
// })



// let obj = {
//     name : "jane",
//     age : 20,
//     city : "newyork"
// };
// console.log(obj);



// Object Methods Explanation
// function objectMethods(obj) {
//     console.log("Original Object:", obj);

//     let keys = Object.keys(obj);
//     console.log("After Object.keys():", keys);

//     let values = Object.values(obj);
//     console.log("After Object.values():", values);

//     let entries = Object.entries(obj);
//     console.log("After Object.entries():", entries);

//     let hasProp = obj.hasOwnProperty("property");
//     console.log("After hasOwnProperty():", hasProp);

//     let newObj = Object.assign({}, obj, { newProperty: "newValue" });
//     console.log("After Object.assign():", newObj);


//   }

//   // Example Usage for Object Methods
//   const sampleObject = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//   };

//   objectMethods(sampleObject);

// const obj = { name: "John" };

// // Destructuring with a default value for "age"
// const { name = "mayur", age = 25 } = obj;

// console.log(name); // Output: "John"
// console.log(age);  // Output: 25 (since "age" is not defined in obj)

// rest and spread operator

let num = [1,2,3,4,5,6,7,8,9,10];
function rest(...args){
    console.log(args);
}

// let obj = {
//     name: "John",
//     age: 25,
// }