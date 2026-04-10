
console.log("This is a scratch file for teaching purposes")
const para=document.getElementById("totalTasks")

const header="Task Man"

const para2=document.createElement("p")
console.log("fsdgbsfg")
para2.textContent="Welcome to the Task Manager Application"
document.body.appendChild(para2)



const headerElement=document.createElement("h1")
headerElement.textContent=header
document.body.appendChild(headerElement)         

console.log("Hello World")

console.log("fsgdfgrdg")

function addTask(){

    
    

    const taskInput=document.getElementById("taskInput")

    const task=taskInput.value  

    const taskList=document.getElementById("taskList")

    const listItem=document.createElement("li")

    listItem.textContent=task   

    taskList.appendChild(listItem)

    taskInput.value=""
}

