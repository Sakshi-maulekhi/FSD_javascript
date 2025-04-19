//const arr=["squirrel","alpaca","buddy"];
//arr.forEach(e=> console.log(e));


//Spread Operator
// let spread=["so","much","fun"];
// let message=["Javascript","is","and","fun","very","powerful",...spread];
// console.log(message);
// function add(x,y,z,a){
//     console.log(x+y+z+a);
// }
/*let arr=[5,9];
let arr2=[6,7];
add(...arr,...arr2);


rest parameter
function somefunction(para1,...para2){
    console.log(para1,para2);
}
somefunction("hi","there!","how are you?");


//Returning function values
function addTwonumbers(x,y){
    return sum=x+y;
}
let result=addTwonumbers(4,5);
console.log(result);

let resultarr=[];
for(let i=0;i<10;i++){
    let result=addTwonumbers(i,2*i);
    resultarr.push(result);
}
console.log(resultarr);

let addTwonumbers2=(x,y)=>x+y;
let result2=addTwonumbers2(12,15);
console.log(result2);

let addTwoNumbers=(x,y)=>{
    console.log("Adding...");
    return x+y;
}
console.log(addTwoNumbers=(9,8));



//Variable scope
function testAvailability(x){
    console.log("Available here:",x);
}
testAvailability("Hi");
console.log("Not vaialable here:",x);

function availability(){
    let y="Local variable";
    console.log()
}

function availaility(){
    let y="I'll return";
    console.log("Outside the function")
}

function doingstuff(){
    if(true){
        var x="local";
    }
    console.log(x);
}
doingstuff();
function doingstuff(){
    if(true){
        console.log(x);
        var x="local";
    }
}*/
// doingstuff();
// //console.log(x);
// function doingstuff(){
//     if(true){
//         //  console.log(x);
//         var x ="local";
//         //console.log(x);
//     }
//     console.log(x);
// }

//doingstuff()


// for(let i=0;i<5;i++){

//         console.log(i)
   
// }

//Global variables
// let globalVar="Accessible everywhere!" ;
// console.log("Outside function:",globalVar);
// function creatingNewScope(x){
//     console.log("Access to global vars inside function.",globalVar);
// }
// creatingNewScope("some parameter");
// console.log(globalVar);

// let x="global";
// function doingStuff(){
//     let x="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// let x="global";
// function doingstuff(x){
//     console.log(x);
// }
// doingstuff("param");
// class Employee {

//     static companyName = "ABC Company";
//     constructor(name, salary, age, isManager, dateOfJoining) {
//         this.name = name;
//         this.salary = salary;
//         this.age = age;
//         this.isManager = isManager;
//         this.dateOfJoining = dateOfJoining;
//     }

//     setName(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }

//     setSalary(salary) {
//         this.salary = salary;
//     }

//     getSalary() {
//         return this.salary;
//     }

//     static calculateNewSalaryAfterBonus(employeeSalary, bonusPercentage) {
//         return employeeSalary + (employeeSalary * bonusPercentage/100)
//     }

// }

// var employee = new Employee("John Doe", 100000, 30, true, "2020-01-01");
// var employee2 = new Employee("John Dae", 120000, 30, true, "2020-01-01");
//  console.log(employee);
// employee.setName("Sakshi")
//  console.log(employee.getName());

// var newSalary = Employee.calculateNewSalaryAfterBonus(employee2.getSalary(), 10)
// employee2.setSalary(newSalary);
// console.log(employee2.getSalary());

// console.log(Employee.companyName);

// (function(){
//     console.log("IIFE");
// })();

// (()=>{
//     console.log("run right away");
// })();

//RECURSIVE FUNCTIONS
// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);

// function logRecursive(nr){
//     console.log(nr);
//     if(nr>0){
//         logRecursive(nr-1);
//     }
//     else{
//         console.log("done with recursion");
//     }
//     console.log("ended function:",nr);
    
// logRecursive(3);
// }
    
// function doOuterfunctionStuff(nr){
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunction(x){
//         console.log(x+7);
//         console.log("I can access outer variables:",nr);
//     }
// }
// doOuterfunctionStuff(3);
// doInnerfunctionStuff(3);

//let functionVariable=function()


//FUNCTION CALLBACKS
//it is an example of passing a function as an argument to another function
// function doFlexibleStuff(executeSuff){
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
// }
// doFlexibleStuff((functionVariable));

// let youGotThis=function(){
//     console.log("You're doing really well,keep coding!");
// };
// setTimeout(youGotThis,4000);
// //setInterval(youGotThis,1000);


