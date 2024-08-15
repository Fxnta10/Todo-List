const taskAddingForm = document.getElementById("taskForm");

taskAddingForm.addEventListener("submit", function () {
  addTask();
});

function addTask() {
  const taskinputField = document.getElementById("addTaskInput");
  const taskName = taskinputField.ariaValueMax.trim();

  if (taskName != " ") {
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerHTML = taskName;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
  }
}
