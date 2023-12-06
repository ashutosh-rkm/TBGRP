
document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.className = 'task';

    const taskTextElement = document.createElement('input');
    taskTextElement.type = 'text';
    taskTextElement.value = taskText;
    taskTextElement.disabled = true;

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.className = 'edit';
    editButton.onclick = function () {
        taskTextElement.disabled = !taskTextElement.disabled;
        taskTextElement.focus();
        saveTasks();
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function () {
        li.remove();
        saveTasks();
    };

    li.appendChild(taskTextElement);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';

    saveTasks();
}

function saveTasks() {
    const tasks = [];
    const taskList = document.getElementById('task-list').children;

    for (let i = 0; i < taskList.length; i++) {
        const taskText = taskList[i].querySelector('input[type="text"]').value;
        tasks.push(taskText);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    storedTasks.forEach(function (taskText) {
        const li = document.createElement('li');
        li.className = 'task';

        const taskTextElement = document.createElement('input');
        taskTextElement.type = 'text';
        taskTextElement.value = taskText;
        taskTextElement.disabled = true;

        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.className = 'edit';
        editButton.onclick = function () {
            taskTextElement.disabled = !taskTextElement.disabled;
            taskTextElement.focus();
            saveTasks();
        };

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function () {
            li.remove();
            saveTasks();
        };

        li.appendChild(taskTextElement);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}