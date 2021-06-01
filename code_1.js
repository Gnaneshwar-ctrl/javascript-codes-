// printing in terminal 
console.log("hello world");

// prompting on browser 
//alert("hello world");

// variable types 

var name = "bob";
let age = 19;
const height = 6;

console.log(name);
console.log(age);
console.log(height);

// functions 

let num1 = 6;
let num2 = 3;

add(num1,num2);
sub(num1,num2);
mult(num1,num2);
div(num1,num2);

function add(num1,num2){
    console.log(num1+num2);
}

function sub(num1,num2){
    console.log(num1-num2);
}

function mult(num1,num2){
    console.log(num1*num2);
}

function div(num1,num2){
    console.log(num1/num2);
}

// return ussage

function welcome(name){
    return ("hello " + name);
}

let stat = welcome(name) ;

console.log(stat)

num1++

console.log(num1);

--num2

console.log(num2);

console.log(10>2);

console.log(5>6 || 6>4);

console.log(5>6 && 6>4);

logentries = [];

logentries.push(num1);

console.log(logentries[0]);

console.log(typeof num1 );

// Control statements 

if(name == "bob"){
    console.log("name is " + name);
}

if(age == 20){
    console.log("age is 20");
}
else{
    console.log("age is "+ age);
}

if(height != 6){
    console.log("height is not 6");
}
else if(height == 6){
    console.log("height is "+ height);
}

var grade = "A";

switch(grade){
    case "A":{
        console.log("excellent");
        break;
    }
    default :{
        console.log("shit grade");
    }
}

// Loops

let x = 6 ;
while( x>0 ){
    --x
    console.log(x);
}

do {
    let a = 0;
    console.log(a);
    a++
}while(false);

for(var p = 1 ; p<10;p++){
    console.log(p);
}

// function constructor

function emmus(...params){
    console.log(params);
    return params.length;
}

var emmu = emmus(1,2,3,4,5,6,7,8,9);

console.log(emmu);

let mlp = new Function("a","b","return a*b;");

console.log(mlp(5,6));

//lamda function 

var food = x => x+10;
console.log(food(5));

var foods = ( x, y) => x + y;
console.log(foods(10,20));

// generator function 

function* query(){
    const name1 = yield "whats your name?" ;
    const age1 = yield "whats your age?" ;
    return `${name1}'s age is ${age1}` ;
}

const instance = query();

console.log(instance.next());
console.log(instance.next("Gnaneshwar"));
console.log(instance.next(19));

function* naturalNumbers(){
    let nat=1;
    while(true) yield nat++;
}
var natNumIterator = naturalNumbers();

console.log(natNumIterator.next().value);
console.log(natNumIterator.next().value);
console.log(natNumIterator.next().value);
console.log(natNumIterator.next().value);

function* anotherWelcome(name){
    yield `from another generator function ${name}`;
}

function* welcome(name){
    yield `Hi ${name}`;
    yield* anotherWelcome(name);
    yield 'bye';
}

var wel = welcome("gnaneshwar");

console.log(wel.next());
console.log(wel.next());
console.log(wel.next());

