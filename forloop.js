const person4={
    fname:"John",Iname:"Doe",age:25
};
let text="";
for(let x in person4){
    text+=person4[x];
    console.log(text);
    //document.write(text);
}

const numbers=[45,4,9,16,25];
let txt="";
for(let x in numbers){
    txt+=numbers[x];
    console.log(txt);
}
const numbers6=[45,4,9,16,25];
let txt2="";
numbers.forEach(myFunction);
function myFunction(value,index,array){
    txt2+=value;
    console.log(txt2);
}
const cars=["BMW","Volvo","Mini"];
let text3="";
for(let x of cars){
    text3+=x;
    console.log(text3);
}
let language="Javascript";
let text4="";
for(let x of language){
    text4+=x;
    console.log(text4);
}