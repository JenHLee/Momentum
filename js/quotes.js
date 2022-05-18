const URL = "https://quotable.io/random";

fetch(URL)
    .then(response => response.json())
    .then(data => {
        let quote = document.querySelector("#quote span:first-child");
        let author = document.querySelector("#quote span:last-child");

        quote.innerText = `${data.content + " - "}`;
        author.innerText = data.author;
    })