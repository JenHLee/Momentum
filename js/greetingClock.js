const clock = document.querySelector("h2#clock");
const nameQuestion = document.querySelector("#name-question");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoQuestion = document.querySelector("#todo-question");
const todoForm = document.querySelector("#todo-form");

let date = "";
let hours = "";

// Uppercase, when it has only strings (that user use more than twice.)
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/*
const loginForm = document.getElementById("login-form") == const loginForm = document.querySelector("#login-form") 
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

function getClock() {
    date = new Date();
    hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock() //call it once
setInterval(getClock, 1000); //and then call it every 1sec 
//setTimeout(sayHello, 5000); //call it once, when 5sec


function onLoginSubmit(event) {
    //event is information that I need (first argument)
    event.preventDefault();
    //Stop default behavior of any event (browser usually do)
    nameQuestion.classList.add(HIDDEN_CLASSNAME); 
    loginForm.classList.add(HIDDEN_CLASSNAME); //Add the .hidden (class) to loginForm
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //variable of username, value of username
    paintGreetings(username);
}

function paintGreetings(username) {
    clock.classList.remove(HIDDEN_CLASSNAME);
    todoQuestion.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    if (hours >= 5 && hours < 12) {
        greeting.innerText = `Good morning, ${username}.`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else if (hours >= 12 && hours < 17) {
        greeting.innerText = `Good afternoon, ${username}.`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else {
        greeting.innerText = `Good evening, ${username}.`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    nameQuestion.classList.remove(HIDDEN_CLASSNAME);
    console.dir(nameQuestion);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //submit form -> js call "onLoginSubmit" function -> event : information about the event that just happened

} else {
    //show the greetings and remove the login-form
    paintGreetings(savedUsername);
}
