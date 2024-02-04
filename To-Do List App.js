// i first defined an array to store tasks 
let tasks = [];

// then i defined a function to display the main menu
function displayMainMenu() {
    console.log("----- To-Do List App -----");
    console.log(" Display Tasks");
    console.log(" Add Task");
    console.log(" Delete Task");
    console.log(" Exit");
}
//function to display task list
function displayTasks () {
    console.log("-----Tasks-----");
    if (tasks.length === 0) {
        console.log("No tasks set yet");
    }else  {
        tasks.forEach((task,index) => {
            console.log(`${index}. ${task}`);
        })
    }
}
// a function to add a task
function addTask(task) {
    tasks.push(task);
    console.log(`Task "${task}" has been successfully added`);// i first defined an array to store tasks 
    let tasks = [];
    
    // then i defined a function to display the main menu
    function displayMainMenu() {
        console.log("----- To-Do List App -----");
        console.log(" Display Tasks");
        console.log(" Add Task");
        console.log(" Delete Task");
        console.log(" Exit");
    }
    //function to display task list
    function displayTasks () {
        console.log("-----Tasks-----");
        if (tasks.length === 0) {
            console.log("No tasks set yet");
        }else  {
            tasks.forEach((task,index) => {
                console.log((index + 1) + ". " + task);
            })
        }
    }
    // a function to add a task
    function addTask(task) {
        tasks.push(task);
        console.log(`Task "" has been successfully added`)
    }
    
    //function added to delete a task 
    function deleteTask(index) {
        if(index >= 0 && index < tasks.length){
            const deletedTask = tasks.splice(index, 1);
            console.log(`Task "" has been successfully deleted`);
        }else{ console.log("Invalid task");
        }
    }
}

//function added to delete a task 
 
function deleteTask(index) {
    if(index >= 0 && index < tasks.length){
        const deletedTask = tasks.splice(index, 1);
        console.log(`Task "${deletedTask}" has been successfully deleted`);
        }else{ console.log("Invalid task");
    }
}
    
function runToDoListApp (task) {

    
}