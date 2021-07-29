const form = document.querySelector(".addTaskForm");
const formSubmit = document.querySelector(".addTaskForm__submit");

form.onsubmit = function (event) {
  event.preventDefault();
  const checkedDateIput = document.querySelector(".addTaskForm__radio:checked")
    .value;
  const textInput = document.querySelector(".addTaskForm__textInput").value;

  console.log(checkedDateIput, textInput);
};




// Display sleceted date onsubmit, using submit button
const form = document.querySelector(".addTaskForm");

form.onsubmit = function (event) {
  // Prevent the default functionality of the submit event, which is reloading the page
  event.preventDefault();

  const newTask = { title: "", date: "", isDone: false };

  const checkedDateInput = document.querySelector(
    ".addTaskForm__radio:checked"
  );
  const textInput = document.querySelector(".addTaskForm__textInput");

  newTask.title = textInput.value;
  newTask.date = checkedDateInput.value;

  // template literals
  console.log(
    `Hi you entered "${newTask.date}" as date and "${newTask.title}" as description`
  );
  console.log(newTask);
};



