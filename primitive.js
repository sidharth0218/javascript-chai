// primintive

// undefined, string, boolean,null, Number,Symbol,BigInt
const score=100;
const scoreValue=100.5;
const loggIn=false;
const outsidetemp=null;
let email;

const id=Symbol('123');
const id1=Symbol('123');
console.log(id === id1);

const bignumber=22556243433466555111n;

//Non primitive (reference) Array,Object,function

const heros=['ram','sham','karn','arjun','sidharth'];
let myObj={
    name:'madan lal',
    age:83,
    caste:'Punjabi',
}

const Function =function(){
    console.log("hello world");
    
}
let stack="cello";
let myobj1=myObj;
myobj1.name="Madan Lal Kashyap";
let stack1=stack;
stack1="apple";
console.log(stack1,myobj1);
console.log(stack,myObj);

// isme non primitive mai  refer hoti hai value to original  but in case of primitive  copy hoti hai value not refer from original
// aur types kaun kaun c if data type hai  


// console.log(typeof heros);
// console.log(typeof bignumber);
// console.log(typeof id);
// console.log(typeof id1);
// console.log(typeof scoreValue);



