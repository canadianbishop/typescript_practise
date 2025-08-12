interface Person{
      name:string
}

interface DogOwner extends Person{
      dogName:string
}

interface Manager extends Person{
      managePeople():void,
      delegateTasks():void
}

let getEmployee = (): Person| DogOwner| Manager=>{
   const rand= Math.random();
   if(rand < 0.33){
      const person:Person ={ name:'bish'};
      return person
   }else if(rand > 0.33 && rand < 0.66 ){
      return {
            dogName: 'rex',
            name: 'canabish'
      }
   }else{
      return {
            name:'bish',
            managePeople() {
                  console.log('managing people')
            },
            delegateTasks() {
                  console.log('tasks delegated')
            },
      }
   }
}

const employee : Person| DogOwner| Manager = getEmployee();

function isManger(obj:Person|DogOwner| Manager): obj is Manager{
      return 'delegateTasks' in obj;
}

if (isManger(employee)){
      employee.delegateTasks();
};

//  tuples 

const lists : [number, string] = [2, 'bishop'];

lists.push('bishmas');
lists.push(29);


function getDets():[number,string]{
      return lists
}

let admin = getDets()


// enums

enum UserRole {
      admin = 'admin',
      manger = 'manager',
      employee = 'employee'
}

type User ={
      id:number,
      name:string,
      role: UserRole,
      contact:[email:string,phone:string]
}

function createUser(user:User):User{
      return user
}

const user:User= createUser({id:1, name:'bish', role:UserRole.admin, contact:['bish@gmail.com', '274']})


// type ascertion

const someVal : string= 'this is a string ';

const val:number= (someVal as string).length;

type bird = {
      name:string
}

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birds = JSON.parse(birdString) as bird;
 let dog = JSON.parse(dogString)as bird


//  type unknown

let unknown:unknown= 'fuck me '

unknown = 383
unknown= true
unknown= 7.3

if(typeof unknown === 'number'){
      unknown.toFixed()
}

      type word = 'good'| 'bad';

      function sayEthics(word:word): void{
            if(word === 'good'){
                  console.log('you are good')
            }else if(word=== 'bad'){
                  console.log('you are bad')
            }else if(word=== 'fuck'){
                  console.log('never ever ')
            }
}



// challenges

type ValueType = boolean| string | number
 
let someNumber:ValueType;

const randomNumber:number = Math.random();

someNumber = randomNumber > 0.33 ? 'HELLO' : randomNumber < 0.66 ? 1234 : true

function checkValue(num:ValueType):ValueType{
   if(typeof num === 'string'){
     return num.toLocaleLowerCase();
      ;
   }else if(typeof num === 'number'){
    return  num.toFixed(2);
   }else{
      return (`boolean: ${num}`)
   }
}


// challenge two type narrowing

type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;


function makeaSound(animal:Animal){
      if(animal.type === 'dog'){
            animal.bark()
      }else{
            animal.meow()
      }
}

let animal: Animal = {
      type: 'cat', name:'rex', meow():void{console.log('mewwww ')}
}

// function makeaSound(animal:Animal):void{
//   if('bark' in animal){
//       animal.bark()
//   }else{
//       animal.meow()
//   }
// }


// challenge 4  TRUTHY OR FALSY CHECK

function printLength(str: string| null| undefined): number | string{
   if (str){
     return str.length
   }else{
      return 'no string provided'
   }
}


// INSTANCEOF 

function take(val: string| Date):string{
      if(val instanceof Date){
            return String(val.getFullYear());
      }return val
}

//challenge five TYPE PREDICATE 

type Student = {
  name: string;
  study: () => void;
};

type user = {
  name: string;
  login: () => void;
};

type Individual = Student | user;

const randomPerson = (): Individual => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') };    
};


const person = randomPerson();

function isStudent(pers:Individual): Pers is Student{
   if('study' in pers){
      return pers.study()
   }
}


function length(str:string|null|undefined){
  str ? console.log(str.length) : console.log('this is not a string') 
}


// instance of type guard

try {
      
} catch (error) {
   if(error instanceof Error){
       console.log(error.message)  
   }else{
      console.log(error)
   }
     
 
}



function checkInput(input:Date| string):string{
      if(input instanceof Date){
         return input.getFullYear().toString()
      }else{
            return input
      }
}


// discriminated unions 