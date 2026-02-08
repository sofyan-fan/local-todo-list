let formContainer;
const content = document.querySelector(".content");
const addBtn = document.querySelector(".add-task");
const body = document.body;
let currentTask = null;

//function to create data task

function createTask(title, description, deadline, priority, finished = false) {
  return {
    title,
    description,
    deadline,
    priority,
    finished,
  }
};

// function to create the form
function createForm() {

  formContainer = document.createElement("div");

  // add attributes

  formContainer.classList.add("form-container");

  // form innerHTML
  formContainer.innerHTML = `
   <form class="form" action="">
    <label for="taskname">Task:</label>
    <input type="text" id="taskname" name="taskname" required>
    <label for="taskdes">Description:</label>
    <input type="text" id="taskdes" name="taskdes" required>
   
    <div class="date-section">
      <div class="date-container">
        <label for="deadline"> Deadline:</label>
        <input type="date" id="deadline" name="deadline" required>
      </div>
      <div class="prio-container">
        <label for="taskprio">Priority:</label>
        <select name="taskprio" id="taskprio">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

      </div>
    </div>
    <div class="form-btns">
      <input class="submit-btn" type="submit">
      <input class="cancel-btn" type="button" value="Cancel">
    </div>
  </form>
  `
  // append elements
  body.appendChild(formContainer);

  // configure submit button
  const form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  })

  //cancel form
  const cancelForm = document.querySelector(".cancel-btn");

  cancelForm.addEventListener("click", () => {
    formContainer.style.display = "none"
  })

  // hide form
  formContainer.style.display = "none"
}

// Render form but hidden unit
createForm();

//function hide form
function hideForm() {
  formContainer.style.display = "none"
}

// funtion show form
function showForm(task = null) {
  currentTask = task;
  formContainer.style.display = "block";

  const taskNameInput = document.getElementById("taskname");
  const taskDesInput = document.getElementById("taskdes");
  const deadlineInput = document.getElementById("deadline");
  const taskPrioInput = document.getElementById("taskprio");

  if (task === null) {
    taskNameInput.value = "";
    taskDesInput.value = "";
    deadlineInput.value = "";
    taskPrioInput.value = "";
  } else {
    taskNameInput.value = task.title;
    taskDesInput.value = task.description;
    deadlineInput.value = task.deadline;
    taskPrioInput.value = task.priority;
  }
}


addBtn.addEventListener("click", () => {
  showForm();
})

//handler to delete

function attachedDeleteHandler(deleteButton, taskCard) {
  deleteButton.addEventListener("click", () => {
    taskCard.remove()
  })
}

//handler to adjust task
function attachedAdjustHandler(adjustButton, task) {
  adjustButton.addEventListener("click", () => {
    showForm(task);
  })
}

//create task card

function createTaskCard(task) {

  // create elements for task card
  const taskCard = document.createElement("div");
  const typeTask = document.createElement("h1");
  const descTask = document.createElement("div");
  const taskDeadLine = document.createElement("div");
  const taskPrio = document.createElement("div")
  const actionBTn = document.createElement("div");
  const delBtn = document.createElement("button");
  const adjBtn = document.createElement("button");

  // add attribute to elements
  taskCard.classList.add("task-card");
  typeTask.classList.add("type-task");
  descTask.classList.add("desc-task");
  taskDeadLine.classList.add("task-deadline");
  taskPrio.classList.add("task-prio")
  actionBTn.classList.add("action-btns");
  delBtn.classList.add("del-btn");
  adjBtn.classList.add("adj-btn");

  // textcontent of elements
  typeTask.textContent = task.title;
  descTask.textContent = task.description;
  taskDeadLine.textContent = `Due date: ${task.deadline}`;
  taskPrio.textContent = task.priority;

  delBtn.textContent = "DELETE";
  adjBtn.textContent = "ADJUST";

  taskCard._task = task;

  // append elements
  content.appendChild(taskCard);
  taskCard.appendChild(typeTask);
  taskCard.appendChild(descTask);
  taskCard.appendChild(taskDeadLine);
  taskCard.appendChild(taskPrio);
  taskCard.appendChild(actionBTn);
  actionBTn.appendChild(delBtn);
  actionBTn.appendChild(adjBtn);

  // delete task
  attachedDeleteHandler(delBtn, taskCard);

  //adjust task
  attachedAdjustHandler(adjBtn, task)


  // return to acces later
  return taskCard;
}

const form = document.querySelector(".form");
const taskNameInput = document.getElementById("taskname");
const taskNamelabel = document.querySelector(`label[for="${taskNameInput.id}"]`);

//submit handler

form.addEventListener("submit", () => {


  // transfer input values to taskcard
  const title = document.getElementById("taskname").value;
  const description = document.getElementById("taskdes").value;
  const deadline = document.getElementById("deadline").value;
  const priority = document.getElementById("taskprio").value;

  if (currentTask === null) {

    const task = createTask(
      title,
      description,
      deadline,
      priority,
      false,
    );

    createTaskCard(task);
  } else {
    // ✅ EDIT MODE
    task.title = title;
    task.description = description;
    task.deadline = deadline;
    task.priority = priority;

    // update DOM

    document.querySelector(".type-task").textContent = title;
    document.querySelector(".desc-task").textContent = description;
    document.querySelector(".task-deadline").textContent = `Due date: ${deadline}`;
    document.querySelector(".task-prio").textContent = priority;
  }

  currentTask = null;

  hideForm();
})

function createProduct(name, price, amount){
  return {
    name,
    price,
    amount,
  }
}

const product1 = createProduct("pants", 50, 100 );

console.log(product1)

const container = document.querySelector(".container");

container._product1 = product1;

console.log(container._product1.name);

function test (para = null){
  
 if (para === null){
  console.log("There is nothing here. Do you want to create a new task?")
 }else{
  console.log("would you like to edit an existing task ?")
 }

}

test();


