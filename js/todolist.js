window.onload = () => {
  const form = document.getElementById("myForm");
  const cancelButtom = document.querySelector(
    "#buttomTask buttom[type='buttom']"
  );
};
const form = document.getElementById("myForm");
form.onsubmit = function (e) {
  e.preventDefault();
  const listName = document.getElementById("listName");
  function createTaskList() {
    if (listName.trim() === "") {
      alert("IT'S EMPTY!!!!!");
      return;
    }
  }

  function createTaskList() {
    if (listName.trim() === "") {
      alert("IT'S EMPTY!!!!!");
      return;
    }
  }

  function addTask() {
    const taskText = document.getElementById("newTask");
    if (taskText.trim() === " ") {
      altert("IT'S EMPTY!!");
      return alert;
    }

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.innerHTML = taskText;
    taskList.appendChild(listItem);
    document.getElementById("newTask").value = "";

    listItem.addEventListener("click", function () {
      if (!listItem.classList.contains("completed")) {
        listItem.classList.add("completed");
      } else {
        listItem.classList.remove("completed");
      }
    });
    taskList.appendChild(listItem);
    document.getElementById("newTask").value = "";
  }
};
