const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement >('.list'); 


interface Task{
      description: string;
      isCompleted: boolean;
}

const Tasks: Array<Task> = loadTasks();

Tasks.forEach(renderTask)

function loadTasks():Task[]{
   const savedTask = localStorage.getItem('tasks');
  return savedTask? JSON.parse(savedTask): [];
}


taskForm?.addEventListener('submit',(e)=>{
      e.preventDefault();
    const taskDescription = formInput?.value;
    if(taskDescription){

     const task:Task= {
      description: taskDescription,
      isCompleted: false
     }
      // add task
      addTask(task)
      // render task
      renderTask(task)
      // update local storage
      UpdateStorage()

       
      formInput.value = ''; 
      return;
    }
  alert('please provide a task description')
})

function addTask(task:Task):void{
    Tasks.push(task);  
}

function renderTask(task:Task):void{
  const li = document.createElement('li');
  li.innerText = task.description;

//   checkbox
 const checkBox = document.createElement('input');
 checkBox.type = 'checkbox';
 checkBox.checked =task.isCompleted;

//  toggle checkbox

checkBox.addEventListener('change', ()=>{
      task.isCompleted = !task.isCompleted;
      UpdateStorage();
})

  
  taskListElement?.append(checkBox,li); 
}


function UpdateStorage():void{
    localStorage.setItem('tasks',JSON.stringify(Tasks))
} 