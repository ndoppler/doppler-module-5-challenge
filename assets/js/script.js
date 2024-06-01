// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let someId = JSON.parse(localStorage.getItem("nextId"));
let myModal = document.getElementById("myModal");
let taskNameInput = $('#taskTitle')
let taskDueDateInput = $('#taskDueDate');
let taskDescriptionInput = $('#taskDescription');
let modalFormInput = document.getElementById("submit-btn")


// Todo: create a function to generate a unique task id
function generateTaskId() {
if(!someId) {
    someId = 1
    return someId
}
else {
    someId++
    return someId
}
}

// Todo: create a function to create a task card
function createTaskCard() {

    generateTaskId();

    const taskCard = {
        taskName: 'taskName',
        taskDescription: 'taskDescription',
        taskDueDate: '05/31/2024'
    }
    taskList.push(taskCard);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    localStorage.setItem("nextId", JSON.stringify(nextId));
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
    generateTaskId()

    const taskName = taskNameInput.val().trim()
    const taskDueDate = taskDueDateInput.val()
    const taskDescription = taskDescriptionInput.val()

    const task = {
        taskId: someId,
        title: taskName,
        date: taskDueDate,
        summary: taskDescription,
        status: 'todo'
    };
    renderTaskList()
    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    localStorage.setItem("someId", JSON.stringify(someId));

    taskNameInput.val('')
    taskDueDateInput.val('')
    taskDescriptionInput.val('')
}
// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList()
});

modalFormInput.addEventListener("submit", handleAddTask);

modalForm