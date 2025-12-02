const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask(); // alternative: addBtn.click();
  }
});

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskInputted = taskInput.value.trim();

  if (!taskInputted) {
    return;
  }

  const task = document.createElement("li");
  task.style.listStyle = "none";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";
  task.appendChild(checkbox);

  checkbox.addEventListener("click", function (e) {
    if (e.type === "click") {
      taskText.style.textDecoration = "line-through";
    }
  });

  const taskText = document.createElement("span");
  taskText.textContent = taskInputted;
  taskText.style.marginRight = "10px";
  task.appendChild(taskText);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  task.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(task);
  });

  taskList.appendChild(task);

  taskInput.value = "";
}
