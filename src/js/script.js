function updateCounters() {
    const totalTasks = document.getElementById('taskContainer').children.length;
    const completedTasks = document.querySelectorAll('.task.completed').length;
    document.getElementById('totalTasks').textContent = totalTasks;
    document.getElementById('completedTasks').textContent = completedTasks;
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskContainer = document.getElementById('taskContainer');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.onclick = function() {
        taskDiv.classList.toggle('completed');
        updateCounters();
    };

    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task-text');
    taskSpan.textContent =taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = function() {
        taskContainer.removeChild(taskDiv);
        updateCounters();
    };

    taskDiv.appendChild(taskCheckbox);
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(removeButton);

    taskContainer.appendChild(taskDiv);

    taskInput.value = '';
    updateCounters();
}

function clearAll() {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = '';
    updateCounters();
}