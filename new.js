const form = document.querySelector(".addTaskForm");
const formSubmit = document.querySelector(".addTaskForm__submit");

form.onsubmit = function (event) {
  event.preventDefault();
  const checkedDateIput = document.querySelector(".addTaskForm__radio:checked")
    .value;
  const textInput = document.querySelector(".addTaskForm__textInput").value;

  console.log(checkedDateIput, textInput);
};
