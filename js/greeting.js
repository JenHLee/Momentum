const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// Uppercase, when it has only strings (that user use more than twice.)
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/*
const loginForm = document.getElementById("login-form") == const loginForm = document.querySelector("#login-form") 
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

const link = document.querySelector("a");

function onLoginSubmit(event) {
    //event is information that I need (first argument)
    event.preventDefault();
    //Stop default behavior of any event (browser usually do)

    loginForm.classList.add(HIDDEN_CLASSNAME); //Add the .hidden (class) to loginForm
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //variable of username, value of username
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //submit form -> js call "onLoginSubmit" function -> event : information about the event that just happened
    
} else {
    //show the greetings
    paintGreetings(savedUsername);
}