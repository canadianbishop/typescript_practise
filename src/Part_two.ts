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
}