const input = document.querySelector('#task-input');
const taskList = document.querySelector('.task-list');
const form = document.querySelector('#task-form');


form.addEventListener('submit', (e) => {
    // console.log(e);
    e.preventDefault();

    const taskText = input.value.trim(); //for trim extra white space when use enter 
    // if(taskText === " "){}
    if (taskText) {
        addTask(taskText);
        form.reset(); 
    }
});


function addTask(taskText) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const currentTime = new Date().toLocaleTimeString();

    taskItem.innerHTML = `
        <p>${taskText}</p>
        <span class="task-time">Added at: ${currentTime}</span>
        <div class="task-actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

   
    taskList.appendChild(taskItem);

   
    taskItem.querySelector('.edit').addEventListener('click', () => editTask(taskItem, taskText));
    taskItem.querySelector('.delete').addEventListener('click', () => deleteTask(taskItem));
}


function editTask(taskItem, oldText) {
    const newText = prompt('Edit task:', oldText);
    if (newText) {
        taskItem.querySelector('p').textContent = newText;
        taskItem.querySelector('.task-time').textContent = `Last edited at: ${new Date().toLocaleTimeString()}`;
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
