let addtask = () => {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const task = document.createElement("div");
        task.classList.add('task', "border-2", "border-blue-500", "p-2", "rounded-md", "cursor-pointer", "flex", "justify-between", "items-center", "mb-2", "overflow-x-hidden");
        task.setAttribute('id', 'task-' + new Date().getTime()); // Assign unique ID
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
        });
        task.appendChild(removeTask);

        document.getElementById("todoTasks").appendChild(task);
        taskInput.value = "";
    }
};

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
    }
};


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

// document.querySelectorAll(".task-list").forEach((list) => {
//     list.ondragover = allowDrop;
//     list.ondrop = drop;
// });
