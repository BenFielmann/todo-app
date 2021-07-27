const actionbutton = document.querySelector(".action-button");
actionbutton.onclick = createTaskListItem;

function sendAlert() {
  alert("Hello World");
}

const taskList = document.querySelector(".taskList");

const newTask = document.createElement("p");
newTask.innerText = "Example Task";

taskList.append(newTask);

function createTaskListItem() {
  const taskListItem = document.createElement("label");
  taskListItem.className = "taskItem";

  const taskItemInput = document.createElement("input");
  taskItemInput.className = "taskItem__checkbox";
  taskItemInput.setAttribute("type", "checkbox");

  const taskItemText = document.createElement("span");
  taskItemText.className = "taskItem__labelText";
  taskItemText.innerText = "Example Task";

  taskListItem.append(taskItemInput);
  taskListItem.append(taskItemText);
  taskList.append(taskListItem);

  return taskListItem;
}
