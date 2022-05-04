const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // Because we already configured toDoForm, and the input is inside of toDoForm
const toDoList = document.getElementById("todo-list");

const toDos = [];//localStorage only save String (Text) not array

function saveToDos(){
    localStorage.setItem("todos", toDos);
}


function deleteToDo(event){
    //console.log("deleteToDo is working")
    const li = event.target.parentElement; // can check which button is clicked ->  button's parent is li
    li.remove();
}

function paintToDo(newTodo) {
    //console.log("I will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // li has a child code "span", append have to put the end
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // newTodo has a previous toDoInput (before empty the input value)
    //console.log("toDoInput: " + toDoInput.value);
    toDoInput.value = "";
    //console.log("newTodo: " + newTodo);
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
