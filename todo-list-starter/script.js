const addTask = () => {
const newTask = document.getElementById("new-task-text");
const newTaskDate = document.getElementById("new-task-date");
const newTaskCategory = document.getElementById("new-task-category");

if (newTask.value) {
    todoTasks.push(newTask.value);
    todoTasksStatus.push(false);
    todoTasksImportant.push(false);
    todoTasksDueDate.push(newTaskDate.value);
    todoTasksCategory.push(newTaskCategory.value);

    newTask.value = "";
    newTaskDate.value = "";
    updateTodoList();
}
};

const updateTodoList = () => {
const todoList = document.getElementById("todo-list");
todoList.innerHTML = "";
for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
}
};

const sanitiseCategoryName = (category) => {
return category.toLowerCase().replaceAll(" ", "-");
};

const getCategoryClassName = (category) => {
return "category-" + sanitiseCategoryName(category);
};

const updateCategoryOptions = () => {
const categoryDropdown = document.getElementById("new-task-category");
categoryDropdown.innerHTML = "";

for (const categoryName of todoCategories) {
    const optionElement = document.createElement("option");
    optionElement.value = categoryName;
    optionElement.innerText = categoryName;
    categoryDropdown.appendChild(optionElement);
}

if (!categoryDropdown.value && todoCategories.length > 0) {
    categoryDropdown.value = todoCategories[0];
}
};

const addCategory = () => {
const newCategoryText = document.getElementById("new-category-text");

if (newCategoryText.value) {
    if (!todoCategories.includes(newCategoryText.value)) {
        todoCategories.push(newCategoryText.value);
        updateCategoryOptions();
    }
    newCategoryText.value = "";
}
};

const createNewTodoItemElement = (task, index) => {
const newTodoTaskTextElement = document.createElement("p");
newTodoTaskTextElement.innerText = task;

if (todoTasksStatus[index] == true) {
newTodoTaskTextElement.classList.add("complete");
}

if (todoTasksImportant[index] == true) {
newTodoTaskTextElement.classList.add("important");
}

const dueDateElement = document.createElement("p");
if (todoTasksDueDate[index]) {
    dueDateElement.innerText = "Due: " + todoTasksDueDate[index];
} else {
    dueDateElement.innerText = "";
}

const taskInfoElement = document.createElement("div");
taskInfoElement.appendChild(newTodoTaskTextElement);
taskInfoElement.appendChild(dueDateElement);

const newTodoTaskElement = document.createElement("li");
newTodoTaskElement.classList.add(getCategoryClassName(todoTasksCategory[index]));
newTodoTaskElement.appendChild(taskInfoElement);

const buttonsElement = document.createElement("div");

const importantButtonElement = document.createElement("input");
importantButtonElement.type = "button";
importantButtonElement.value = "Important";
importantButtonElement.onclick = function () {
    toggleImportant(index);
};
buttonsElement.appendChild(importantButtonElement);

const completeButtonElement = document.createElement("input");
completeButtonElement.type = "button";
completeButtonElement.value = "Completed";
completeButtonElement.onclick = function () {
    toggleComplete(index);
};
buttonsElement.appendChild(completeButtonElement);

const upButtonElement = document.createElement("input");
upButtonElement.type = "button";
upButtonElement.value = "↑";
upButtonElement.onclick = function () {
    moveTaskUp(index);
};
buttonsElement.appendChild(upButtonElement);

const downButtonElement = document.createElement("input");
downButtonElement.type = "button";
downButtonElement.value = "↓";
downButtonElement.onclick = function () {
    moveTaskDown(index);
};
buttonsElement.appendChild(downButtonElement);

newTodoTaskElement.appendChild(buttonsElement);
return newTodoTaskElement;
};

const toggleComplete = (index) => {
if (todoTasksStatus[index] == false) {
    todoTasksStatus[index] = true;
} else {
    todoTasksStatus[index] = false;
}
updateTodoList();
};

const toggleImportant = (index) => {
if (todoTasksImportant[index] == false) {
    todoTasksImportant[index] = true;
} else {
    todoTasksImportant[index] = false;
}
updateTodoList();
};

const swapTasks = (a, b) => {
let tempTask = todoTasks[a];
todoTasks[a] = todoTasks[b];
todoTasks[b] = tempTask;

let tempStatus = todoTasksStatus[a];
todoTasksStatus[a] = todoTasksStatus[b];
todoTasksStatus[b] = tempStatus;

let tempImportant = todoTasksImportant[a];
todoTasksImportant[a] = todoTasksImportant[b];
todoTasksImportant[b] = tempImportant;

let tempDueDate = todoTasksDueDate[a];
todoTasksDueDate[a] = todoTasksDueDate[b];
todoTasksDueDate[b] = tempDueDate;

let tempCategory = todoTasksCategory[a];
todoTasksCategory[a] = todoTasksCategory[b];
todoTasksCategory[b] = tempCategory;
};

const moveTaskUp = (index) => {
if (index > 0) {
    swapTasks(index, index - 1);
    updateTodoList();
}
};

const moveTaskDown = (index) => {
if (index < todoTasks.length - 1) {
    swapTasks(index, index + 1);
    updateTodoList();
}
};

let todoTasks = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];
let todoTasksImportant = [false, true];
let todoTasksDueDate = ["", ""];
let todoTasksCategory = ["Home", "Home"];

let todoCategories = ["General", "Work", "Home", "Study"];

updateCategoryOptions();
updateTodoList();