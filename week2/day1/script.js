let addtask = () => {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        const taskId = 'task-' + new Date().getTime();
        const task =  createElement(taskId,taskText, 'border-blue-500');
        document.getElementById("todoTasks").appendChild(task);
        saveTask(taskId, taskText, "todoTasks");
        taskInput.value = "";
    }
//     if (taskText !== "") {
//         const task = document.createElement("div");
//         task.classList.add('task', "border-2", "border-blue-500", "p-2", "rounded-md", "cursor-pointer", "flex", "justify-between", "items-center", "mb-2", "overflow-x-hidden");
//         task.setAttribute('id', 'task-' + new Date().getTime()); // Assign unique ID
//         task.setAttribute('draggable', 'true'); // Make task draggable
//         task.setAttribute('ondragstart', 'drag(event)'); // Drag start event

//         const taskContent = document.createElement("span");
//         taskContent.classList.add('task-content', "text-white", "max-w-[80%]");
//         taskContent.textContent = taskText;
//         task.appendChild(taskContent);

//         const removeTask = document.createElement("button");
//         removeTask.classList.add('remove-task', "bg-red-500", "text-white", "px-2", "py-1", "rounded-md", "ml-2");
//         removeTask.textContent = "Remove";
//         removeTask.addEventListener('click', () => {
//             task.remove();
//         });
//         task.appendChild(removeTask);

//         document.getElementById("todoTasks").appendChild(task);
//         taskInput.value = "";
//     }
};


let createElement = (taskId, taskText, borderColor) =>{
    let task = document.createElement("div");
    task.classList.add('task', "border-2", borderColor , "p-2", "rounded-md", "cursor-pointer", "flex", "justify-between", "items-center", "mb-2", "overflow-x-hidden");
    task.setAttribute('id', taskId); // Assign unique ID
    task.setAttribute('draggable', 'true'); // Make task draggable
    task.setAttribute('ondragstart', 'drag(event)'); // Drag start event
    const taskContent = document.createElement("span");
        taskContent.classList.add('task-content', "text-white", "max-w-[80%]");
        taskContent.textContent = taskText;
        task.appendChild(taskContent);

        const removeTask = document.createElement("button");
        removeTask.classList.add('remove-task', "bg-red-500", "text-white", "px-2", "py-1", "rounded-md", "ml-2");
        removeTask.textContent = "Remove";
        removeTask.addEventListener('click', () => {
            task.remove();
            removeTaskFromStorage(taskId);
        });
        task.appendChild(removeTask);
        return task;
}


// to save task in local storage
let saveTask = (taskId, taskText, columnId)=>{
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  // we use JSON.parse to convert the string to array because local storage only stores string
    tasks.push({id: taskId,content: taskText, column: columnId});
    localStorage.setItem('tasks',JSON.stringify(tasks));
}


let removeTaskFromStorage = (taskId) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

let loadTasks = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const taskElement = createElement(task.id,task.content, getColumnBorderColor(task.column));
        document.getElementById(task.column).appendChild(taskElement);
    })
}

let drag = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
};

let allowDrop = (e) => {
    e.preventDefault();
};

let drop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const draggedTask = document.getElementById(taskId);
    const targetList = e.target.closest(".task-list");

    if (draggedTask && targetList && !targetList.contains(draggedTask)) {
        // Update task styles based on column
        const newBorderColor = getColumnBorderColor(targetList.id);
        draggedTask.className = `task border-2 ${newBorderColor} p-2 rounded-md cursor-pointer flex justify-between items-center mb-2 overflow-x-hidden`;
        targetList.appendChild(draggedTask);
        updateColumnid(taskId, targetList.id);
    }
};

let updateColumnid = (taskId, columnId) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks.find(task => task.id === taskId);
    if(task){
        task.column = columnId;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

let getColumnBorderColor = (columnId) => {
    switch (columnId) {
        case "todoTasks":
            return "border-blue-500";
        case "inProgressTasks":
            return "border-yellow-500";
        case "backlogTasks":
            return "border-red-500";
        case "doneTasks":
            return "border-green-500";
        default:
            return "border-gray-500";
    }
};


window.onload = loadTasks;