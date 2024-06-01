// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let someId = JSON.parse(localStorage.getItem("nextId"));
let myModal = document.getElementById("myModal");
let taskNameInput = $('#taskTitle')
let taskDueDateInput = $('#taskDueDate');
let taskDescriptionInput = $('#taskDescription');
let modalFormInput = document.getElementById("submit-btn")
let taskToDo = $('#todo-cards');
let taskInProgress = $('#in-progress-cards');
let taskDone = $('#done-cards');
let swimLanes = $('#swim-lanes');


// Todo: create a function to generate a unique task id
function generateTaskId() {
    someId = JSON.parse(localStorage.getItem('someId'));
    if (!someId) {
        someId = 1
        return someId
    }
    else {
        someId++
        return someId
    }
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const card = $('<div>')
        .addClass('card project-card draggable my-3')
        .attr('tasknumber', task.taskId);
    const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(task.summary);
    const cardDueDate = $('<p>').addClass('card-text').text(task.date);
    const cardDeleteBtn = $('<button>')
        .addClass('btn btn-danger delete')
        .text('Delete')
        .attr('tasknumber', task.taskId);
    cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
    card.append(cardHeader, cardBody);
    taskToDo.append(card);

    return card;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskToDo.empty();

    for (let task of taskList) {
        if (task.status === "todo") {
            taskToDo.append(createTaskCard(task));
        }
        else if (task.status === "inProgress") {
            taskInProgress.append(createTaskCard(task));
        }
        else if (task.status === "done") {
            taskDone.append(createTaskCard(task));
        }
    }
    return taskList;
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    if (!taskList) {
        taskList = []
    }
    else {
        renderTaskList();
    }

    generateTaskId();
    const taskName = taskNameInput.val().trim()
    const taskDueDate = taskDueDateInput.val()
    const taskDescription = taskDescriptionInput.val()

    const task = {
        taskId: someId,
        title: taskName,
        date: taskDueDate,
        summary: taskDescription,
        status: 'todo',
    };

    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    localStorage.setItem("someId", JSON.stringify(someId));

    createTaskCard(task);

    taskNameInput.val('')
    taskDueDateInput.val('')
    taskDescriptionInput.val('')
}
// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
});

modalFormInput.addEventListener('click', handleAddTask);
swimLanes.on('click', '.delete', handleDeleteTask);