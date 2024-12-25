// import { mayur, add } from './script2.js';
// let mayur = require('./script2.js');
// console.log(mayur);
// class parent{
//     constructor(name){
//         this.name = name;
//     }

//     greeting(){
//         console.log("hello");
//     }
// }

// class child extends parent{
//     play(){
//         console.log("playing");
//     }
// }


// let obj = new child();
// obj.greeting();
// obj.play();


// // Parent class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name} is eating.`);
//     }
// }

// // Child class
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Calls the parent class constructor
//         this.breed = breed;
//     }

//     bark() {
//         console.log(`${this.name} is barking! Woof Woof!`);
//     }
// }

// // Usage example
// const myDog = new Dog("Buddy", "Golden Retriever");

// myDog.eat(); // Inherited from Animal class
// myDog.bark(); // Defined in Dog class

// console.log(`${myDog.name} is a ${myDog.breed}.`); // Accessing properties

// function hello(){
//     return new Promise((resolve,reject)=>{
//         let meet = m;
//         if(meet == 'm'){
//             resolve("we will meet tomorrow");
//         }else if(meet == 'i'){
//             reject("i am ill to day can't meet")
//         }else{
//             reject("i have work");
//         } 
//     })
// }

// hello().then((e)=>{
//     console.log(e);
// }).catch((e)=>{
//     console.log(e);
// })

// localStorage.setItem("username", "Mayur");
// const username = localStorage.getItem("username");
// console.log(username);   


// get,post,put,delete