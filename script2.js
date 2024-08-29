const taskInput = document.getElementById('task-input');
const dueDateInput = document.getElementById('due-date-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterAllBtn = document.getElementById('filter-all');
const filterActiveBtn = document.getElementById('filter-active');
const filterCompletedBtn = document.getElementById('filter-completed');
const clearCompletedBtn = document.getElementById('clear-completed');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        dueDate: dueDate,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = '';
    dueDateInput.value = '';
});

function renderTasks() {
    taskList.innerHTML = '';

    tasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.dataset.id = task.id;

        if (task.completed) {
            li.classList.add('completed');
        }

        li.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });

        li.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        });

        taskList.appendChild(li);
    });
}

filterAllBtn.addEventListener('click', () => {
    renderTasks();
});

filterActiveBtn.addEventListener('click', () => {
    renderTasks(tasks.filter(task => !task.completed));
});

filterCompletedBtn.addEventListener('click', () => {
    renderTasks(tasks.filter(task => task.completed));
});

clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.completed);
    window.location.href = 'congratulations.html';
    renderTasks();
});