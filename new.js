import {
  parseJSONFromLocalStorage,
  stringifyJSONToLocalStorage,
} from "./utils/localstorage.js";

const form = document.querySelector(".addTaskForm");
const formSubmit = document.querySelector(".addTaskForm__submit");

form.onsubmit = function (event) {
  event.preventDefault();
  const taskObject = {
    name: "",
    date: "",
    isDone: false,
  };
  taskObject.date = document.querySelector(".addTaskForm__radio:checked").value;
  taskObject.name = document.querySelector(".addTaskForm__textInput").value;

  //console.log(checkedDateIput, textInput);

  stringifyJSONToLocalStorage("task", taskObject);
};
