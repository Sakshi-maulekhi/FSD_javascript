//callbacks => Its a function that takes another function as an argument,which is then called when the rest of the initial function has finished.

// function doSomething(callback){
//     callback();
// }
// function sayHii(){
//     console.log("Hi");
// }
// doSomething(sayHii);

// function judge(grade){
//     switch(true){
//         case grade=="A":
//         console.log("you got",grade);
//         break;
//         case grade=="B":
//         console.log("you got",grade);
//         break;
//         case grade=="C":
//         console.log("you got",grade);
//         break;
//         case grade=="D":
//         console.log("you got",grade);
//         break;
//         default:
//             console.log("grade");
//     }
// }
// judge("B");

// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
//         case score>=60:
//             grade="D";
//             break;
//         default:
//             grade="F";

//     }
//     callback(grade);
// }
// getGrade(95,judge);


//Promises=> With promises, we can organize the sequence of our code in a slightly easier-to-maintain way.
//This function needs two parameters, and these parameters are callbacks.We have called them resolve and reject here.
//When resolve() is ChannelSplitterNode,the promise is presumed to be successful and whatever is between the 
// arrows is returned and used as input for the then method on the Promise Object.If Reject() is called,the 
// promise failed and the catch() method on the promise Object(if present) is executed with the argument of 
// the reject() function.
// let promise=new Promise(function(resolve,reject){
//     let x=20;
//     if(x<10){
//         resolve(x);
//     }
//     else{
//         reject("too low");
//     }
// });
// promise.then(
//     function(value){
//         console.log("Success:",value);
//     },
//     function(error){
//         console.log("Error:",error);
//     }
// );
// const promise=new Promise((resolve,reject)=>{
//     //resolve("success!");
//     reject("unsuccessful");
// })
// .then(value=> {
//     console.log(value);
//     return "we";
// })
// .then(value=> {
//     console.log(value);
//     return "can";
// })
// .then(value=> {
//     console.log(value);
//     return "chain"
// })
// .then(value=> {
//     console.log(value);
//     return "promises";
// })
// .then(value=> {
//     console.log(value);
// })
// .catch(value=> {
//     console.log(value);
// })


//async and await => with the async keyword, we can make a function return a Promise. This makes the promises nicer to read and look a lot like asynchronous
//code
function saySomething(x){
    return new Promise(resolve=> {
        setTimeout(()=>{
            resolve("something " + x);
        },2000);
    });
}
async function talk(x){
    const words=await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);
talk(10);


