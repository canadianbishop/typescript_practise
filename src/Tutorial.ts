type person = {
  name: string;
  age: number;
  race?: string;
  readonly position: string;
};

let person1: person = {
  name: "ayo",
  age: 20,
  position: "admin",
};
let person2: person = {
  name: "ayo",
  age: 20,
  position: "admin",
};
let person3: person = {
  name: "ayo",
  age: 20,
  position: "admin",
};

person1.race = "black";

let persons: person[] = [person1, person2, person3];

// functions

let names: string[] = ["bishop", "gem", "femi"];

function checkname(name: string): boolean {
  return names.some((item) => item === name);
}

const nameTocheck = "jane";

// if (nameTocheck) {
//   console.log("name is on the lis");
// } else {
//   console.log("name is not on the list");
// }



// default and optional parameters

function checkDiscount(price: number, discount?: number): number {
  return price - (discount || 0);
}

function checkPrice(price: number, discount: number = 0): number {
  return price - discount;
}

const priceAfterDiscount = checkDiscount(299, 500);
const priceBeforeDiscount = checkPrice(100, 20);

// rest parameter..

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  const sum = doubled.reduce((acc, ele) => acc + ele, 0);
  return `${message} ${sum}`;
}

const total: string = sum("the total number is", 1, 2, 4, 5, 3);

//using union types as function parameters

function processInput(val: string | number): void {
  typeof val === "string"
    ? console.log(val.toUpperCase())
    : typeof val === "number"
    ? console.log(val * 2)
    : console.log("this is not a valid value");
}

// objects as a parameter

function welcomeUser({name,id}:{name:string, id?:number}): string{
      return `welcome user ${name} to the course your ID : ${id} `
}

const userOne = {
      name: 'bishop',
      id: 20 
}

// challenge two

const processData = function(input:number|string, {reverse= false}:{reverse?:boolean} ):string|number{
  if(typeof input=== 'number'){
      return input * input;
  }else{
      return reverse? input.toUpperCase().split('').reverse().join(''):input.toLowerCase()
  }
}


// challenge three type alias practice

type Employee = {
      id: number,
      department: string,
      name: string
}

type Manager = {
      id: number,
      name:string,
      employees: Employee[]
}

type Staff = Employee | Manager

function printStaffDetails(staff:Staff):void{
    if('employees' in staff){
      console.log(`this user is a manager and has ${staff.employees.length} of employees`)
    }else{
      console.log(`this user is an employee in the ${staff.department} department`)
    }
}


const alice:Employee = {
      name:'alice',
      department:'IT',
      id:1
}
const jade:Employee = {
      name:'jade',
      department:'Hr',
      id:2
}
const micheal:Employee = {
      name:'micheal',
      department:'customer service',
      id:3
}


const john:Manager & {position:string} = {
      name:'alice',
      employees:[alice,jade, micheal],
      id:2,
      position: 'head of department'
}


// intersection combining types..

type pers = {
  name: string,
  age: number
}

type race = {
  color?: string
}


const student1:pers & race = {
  name:'bishop',
  age: 20,
  color: 'black'
}


// setting up functions in an interface for an object.

interface Book{
  isbn: number, 
  author: string,
  title: string,
  printAuthour?():void,
  printMessage(message:number): string,
  printSomething: (val:number)=> number
}


const book1: Book = {
  title: 'things fall apart',
  isbn: 1234,
  author: 'bishop',
  printMessage(message) {
    if(message === this.isbn){
    return `the book with the ${message} number is ${this.title}`
    }
    return 'book not found'
  },

  printAuthour(){
    console.log(`the author of the book is ${this.author}`)
  },
  printSomething: (val)=>{
    return val
  }
}


// challenge three

interface Computer{
  readonly id: number,
  ram: string,
  storage?: number,
  brand:string,
  UpgradeRam(val:number): {}
}


let myPc:Computer = {
  id: 1,
  ram: '16GB',
  brand: 'hp',
  UpgradeRam(val){
   const converted = Number(val);
  let updated: Computer = {
    ...this,
    ram: this.ram = `${converted}GB`
  };
   return updated
  }
}

let upgraded = myPc.UpgradeRam(67)



// interface merging

interface LandLord{
  name: string,
  age: number,
  printRace(): void
}

interface LandLord{
  race: string
}

interface DogOwner{
  dogName: string,
  printDogName():void
}

const homeOwner: LandLord= {
   name: 'bishop',
   age: 20,
   race: 'white',
   printRace() {
     console.log(this.race)
   },
}


// interface extension

interface Admin extends LandLord, DogOwner{
   adminId: number,
   fireEmployee():void
}


const admin:Admin={
  adminId: 1,
  name: 'bishop',
  dogName: 'king',
  age:299,
  race: 'black',
  fireEmployee() {
    console.log('you are fired')
  },
  printDogName() {
    console.log(`my dog name is ${this.dogName}`)
  },
  printRace() {
     console.log(this.race)
   },
}





