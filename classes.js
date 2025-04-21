//classes - blueprint for object creation
//constructor=> to initialize the arguments that object calling
// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
    
// }
// let obj=new ClassName("argu1","argu2");
// console.log(obj.prop1);
// console.log(obj.prop2);
// //the this is a keyword
// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("Javascript",2.4,"brown","chihuahua");
// console.log(dog.dogName,"is a",dog.breed,"and weight",dog.weight);

//Constructors=> There can only be one constructor in a class.

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// //let obj=new Person("Sakshi","Maulekhi");
// //console.log(obj.firstname+" "+obj.lastname);
// let p=new Person("Sakshi");
// console.log(p.firstname+" "+p.lastname);

// class Person{
//     constructor(firstname,lastname="Doe"){ //default values in constructor
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("Sakshi");
// console.log(p.firstname+" "+p.lastname);

//Method=> Functions on a class are called methods.When defining these methods,we don't use the function keyword.We start directly with the name:
//Just like functions,methods can also take parameters and return results:
// class Person{
//     constructor(firstname,lastname="Doe"){ //default values in constructor
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hi there! I'm",this.firstname);
//     }
//     compliment(name,object){
//         return "That's a wonderful"+object +","+name;
//     }
// }
// let p=new Person("Sakshi","Maulekhi");
// p.greet();
// let compliment=p.compliment("Harry","Hat");
// console.log(compliment);

//Properties=>sometimes caled field, holds the data of the class
// class Person{
//     #firstname; //protected
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }
// }
// let p=new Person("Sakshi","Maulekhi");
// console.log(p.firstname);

// class Person{
//     #firstname; //protected
//     #lastname;
//     constructor(firstname,lastname){
//         if(firstname.startsWith("M")){
//             this.#firstname=firstname;
//         }else{
//             this.#lastname=lastname;
//         }
//     }
// }

// let p=new Person("Sakshi","Maulekhi");
// console.log(p.firstname);

//Getters amd Setters=> special properties that we can use to get 
// class Person {
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }

//     get firstname() {
//         return this.#firstname;
//     }

//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
// }

// let p = new Person("Sakshi", "Maulekhi");
// console.log(p.firstname); 

// class Vehicle{
//     constructor(color,currentSpeed,maxSpeed){
//         this.color=color;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }
//     move(){
//         console.log("moving at",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed+=amount;
//     }
// }
class Motorcycle extends Vehicle{
    constructor(color,currentSpeed,maxSpeed,fuel){
        super(color,currentSpeed,maxSpeed);
        this.fuel=fuel;
    }
    doWheelie(){
        console.log("Driving on one wheel!");
    }
 }
// //with the extends keyword we specify that a certain class is the child of another class.
// //The super word i =n the constructor is calling the constructor from the parent 
let motor=new Motorcycle("Black",0,250,"gasoline");
console.log(motor.cycle);
motor.accelerate(50);
motor.move();

// //Prototypes=>