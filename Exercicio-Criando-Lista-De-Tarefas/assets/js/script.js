const taskInput = document.querySelector(".task-input");
const taskBtn = document.querySelector(".task-btn");
const tasks = document.querySelector(".tasks");

function createLi() {
  const li = document.createElement("li");
  return li;
}

taskInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) { // keyCode 13 = código da tecla enter
    if (!taskInput.value) return;
    createTask(taskInput.value);
  }
});

function clearInput() {
  taskInput.value = "";
  taskInput.focus();
}

function createEraseBtn(li) {
  li.innerText += " ";
  const eraseBtn = document.createElement("button");
  eraseBtn.innerText = "Apagar";
  // eraseBtn.classList.add("erase-btn");
  eraseBtn.setAttribute("class", "erase-btn");
  eraseBtn.setAttribute("title", "Apagar tarefa");
  li.appendChild(eraseBtn);
}

function createTask(task) {
  const li = createLi();
  li.innerText = task;
  tasks.appendChild(li);
  clearInput();
  createEraseBtn(li);
  saveTasks();
}


taskBtn.addEventListener("click", function () {
  if (!taskInput.value) return;
  createTask(taskInput.value);
});

document.addEventListener("click", function (e) {
  const element = e.target; // retorna o elemento que foi clicado
  
  if (element.classList.contains("erase-btn")) {
    element.parentElement.remove();
    saveTasks();
  }
});

function saveTasks() {
    const tasksList = tasks.querySelectorAll("li");
    const arrayOfTasks = [];

    for (let task of tasksList) {
        let taskText = task.innerText;
        taskText = taskText.replace("Apagar", "").trim(); // remove o texto "Apagar" e o espaço antes e depois
        arrayOfTasks.push(taskText);
    }

    const tasksJSON = JSON.stringify(arrayOfTasks);
    localStorage.setItem("tasks", tasksJSON); // salva o array de tarefas no localStorage, um tipo de banco de dados do navegador (cache)
}

function loadSavedTasks() {
    const tasks = localStorage.getItem("tasks");
    const arrayOfTasks = JSON.parse(tasks);

    for (let task of arrayOfTasks) {
        createTask(task);
    }
}
loadSavedTasks()
