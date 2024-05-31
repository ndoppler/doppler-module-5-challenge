// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));


// Todo: create a function to generate a unique task id
function generateTaskId() {
if(!nextId) {
    nextId = 1
    return nextId
}
else {
    nextId++
    return nextId
}
}

// Todo: create a function to create a task card
function createTaskCard() {
    renderTaskList();
    console.log(taskList);
    generateTaskId();
    console.log(nextId);
    const taskCard = {
        taskName: 'taskName',
        taskType: 'taskType',
        taskDueDate: '05/31/2024'
    };
    taskList.push(taskCard);
    JSON.stringify(localStorage.setItem('tasks', taskList));
    JSON.stringify(localStorage.setItem('nextId', nextId));
    console.log(taskCard);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    if(!taskList) {
        taskList =[]
    }
    return taskList;
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){


}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
