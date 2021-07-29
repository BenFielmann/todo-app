import {
  parseJSONFromLocalStorage,
  stringifyJSONToLocalStorage,
} from "./utils/localstorage.js";

function createTaskListItem(task) {
  const taskListItem = document.createElement("label");
  taskListItem.className = "taskItem";

  const taskItemInput = document.createElement("input");
  taskItemInput.className = "taskItem__checkbox";
  taskItemInput.setAttribute("type", "checkbox");

  const taskItemText = document.createElement("span");
  taskItemText.className = "taskItem__labelText";
  taskItemText.innerText = task.title;

  taskListItem.append(taskItemInput);
  taskListItem.append(taskItemText);
  taskList.append(taskListItem);

  return taskListItem;
}
/* _______________________________________________________________________________ */
const taskList = document.querySelector(".taskList");
const tasks = [
  {
    title: "listen",
    date: "tomorrow",
    isDone: true,
  },
  {
    title: "to",
    date: "tomorrow",
    isDone: true,
  },
  {
    title: "music",
    date: "tomorrow",
    isDone: true,
  },
];

const taskListItems = tasks.map((task) => createTaskListItem(task));

taskList.append(...taskListItems);
