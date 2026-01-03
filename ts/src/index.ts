/*

let sales = 123_456_789;
let course = "TypeScript";
let isPublished = true;
let level;

function render(document: any){
  console.log(document)
}


//tuples have explicit value lengths
//  even though there's a loophole where you can increment a new value into the tuple,
//  it's meant to represent a data structure with values having a defined lenght  

let user : [number, string] = [2,"3"];
user.push(1);
console.log(user);





// enum is for explicitly defining related constants
//the numeric values have an auto increment thanks to TS intellisense 
//the const keyword makes the transpile js to be cleaner


const enum Size { Small=1, Medium, Large }

const  mySize: Size = Size.Large;

console.log(mySize);


//function annotations should always help to explicitly define a function output
// because by default, javascript returns 'undefined' for functions
function calculateTax(income: number, taxYear: number){
  // let x;
  if(taxYear < 2022 && income < 50_000) return income * 1.2;
  return income;
}

calculateTax(10_000,2020);




//working with object annotations
type Employee = {
  readonly id : number,
  name : string,
  retire : (date : Date) => void
}

let employee : Employee = {
  id : 1,
  name: "Barcelona",
  retire : (date: Date) => {
    console.log(date);
  }
}






//union types are used to select the specified options of the types of an argument in a code
//concept of narrowing in union types involves checking the types of arguments 

const kgToLbs = (weight : string | number) : number => {
  if(typeof weight === 'number') return weight * 2.2;
  else return parseInt(weight)* 2.2
}

kgToLbs(40);
kgToLbs('60kg');
*/


//type intersection

type Draggable = {
  drag : () => void
}

type Resizeable = {
  resize : () => void
}


type UIWidget = Resizeable & Draggable

let TextBox = {
  resize : ()=>{},
  drag: ()=>{}
}



// literal types
type Scale = 50 | 100;
type Metric = "cm" | "inch" ;


//  nullable types

function greet(name : string | null |undefined){
  if(name) console.log(`Welcome ${name}`)
  else console.log(`Welcome`)
}

greet(null);