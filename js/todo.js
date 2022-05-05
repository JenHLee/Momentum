const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // Because we already configured toDoForm, and the input is inside of toDoForm
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";

let toDos = [];//localStorage only save String (Text) not array // toDos[] is always empty (we don't want to) so we changed to let

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event){
    //console.log("deleteToDo is working")
    const li = event.target.parentElement; // can check which button is clicked ->  button's parent is li
    //console.log(li.id);
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); //li.id type is String -> parseInt
    saveToDos();
}

function paintToDo(newTodoObj) {
    //console.log("I will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    console.log("newTodoObj text: " + newTodoObj.text + " newTodoObj id: " + newTodoObj.id);
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log("savedToDos:" + savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //console.log("parsedToDos: " + parsedToDos);
    toDos = parsedToDos; // Becasue toDos is always empty array, if there is item, then we need to save it to toDos[]
    //parsedToDos.forEach((item) => console.log("this is the turn of " + item)); // execute function about each item of array (arrow fucntion)
    parsedToDos.forEach(paintToDo); // forEach item is the text that we want to send to paintToDo function (show on the webpage)
}
