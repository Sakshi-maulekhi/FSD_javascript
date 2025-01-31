// var grade='A';
// document.write("Entering switch block:");
// switch(grade){
//     case'A':document.write("Good job");
//     break;
//     case'B':document.write("Good job");
//     break;
//     case'C':document.write("pretty good");
//     break;
//     case'D':document.write("not so good")
//     break;
// }
// 
// var myArray=["A","B","C"];
// for(var i=0;i<myArray.length;i++){
//    console.log("the memeber of myArray in index"+i+"is"+myArray[i]);
// }
// function myFunction(){
//     alert("Hello world!")
// }
// function sayHello(name,age){
//     document.write(name+"is"+age+"years old");
// }
// function add(a,b){
//     console.log(a+b);
//     document.write(a+b);
// }
// add(10,20);
// var res=mul(12,30);
// function mul(x,y){
//     return x*y;
// }
// document.write(res);
// const square=function(number){
// //     return number*number;
// const x=square(4);
// console.log(x);
// function myFunction(g1,g2){
//     return g1/g2;
// }
// const value=myFunction(8,2);
// console.log(value);

// function add(a,b){
//       console.log(a+b);
// }
// add(10,20);
// var add2=(a,b)=>{
//     console.log(a+b);
// };
// add2(102,20);
// var add3=(a,b)=>{
//     console.log(a+b);
// }
// add3(30,20);

// var a=99;
// var b=13;
// var c=15;
// var linebreak="<br>";
// document.write("a-b=");
// result=a-b;
// document.write(result);
// document.write(linebreak);
// document.write("a/b=");
// result=a/b;
// document.write(result);
// document.write(linebreak);
// document.write("a%b=");
// result=a%b;
// document.write(result);
// document.write(linebreak);
// function myFunction(){
// var x=3+3;
// var y="3"+3;
// var z="Hello"+3;
// var demoP=document.getElementById("demo");
// demoP.innerHTML=x+"<br>"+y+"<br>"+z;
// function Redirect(){
//     window.location="https://www.facebook.com/";
 

// }
// document.write("you will be redirected to main page in 10 sec");
// setTimoOut('Redirect()',10000);
// document.addressform.yourname.value
// document.addressform.phone.value
// document.addressform.email.value
// function validateForm(){
//     var x=document.forms["myForm"]["fname"].value;
//     if(x==null||x==""){
//         alert("First name must be filled out");
//         return false;
//     }
// }
function validateForm(){
    var y=document.forms["myForm"]["call"].value;
    if(y.length!=10){
        alert("enter 10 idgit mobile number");
        return false;
    }
    if(!y.match(/^[0-9]{10}$/)){
        alert("only digits,please");
        return false;
    }
}