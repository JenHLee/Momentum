const images = [
"0.jpg",
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // to create Element (same as in the HTML)
bgImage.src = `img/${chosenImage}`;

console.log("bgimage number: " + chosenImage);

document.body.appendChild(bgImage); //add HTML body