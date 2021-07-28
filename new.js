const altButton = document.querySelector(".addTaskForm__radio");

altButton.onclick = alertSelectetDate;

function alertSelectetDate() {
  const checkedDateIput = document.querySelector(
    ".addTaskForm__radioLabel:checked"
  );
  alert(checkedDateIput.value);
}

const form = document.querySelector(".addTaskForm");
const formSubmit = document.querySelector(".addTaskForm__submit");

form.onsubmit = function (event) {
  // prevent the default stops reloading of the page//
  event.preventDefault();
  const checkedDateIput = document.querySelector(
    ".addTaskForm__radioLabel:checked"
  );
  const textInput = document.querySelector(".addTaskForm__textInput");

  const selectdate
};

