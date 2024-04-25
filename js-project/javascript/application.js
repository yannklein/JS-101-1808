console.log("Hello from application.js!");

// ////////
// Select DOM elements
// ////////

//document.querySelector(CSS_SELECTOR)

// with its ID (Matthew)
const matt = document.querySelector("#matthew-davies");
console.log(matt);

// with its tag type (h2)
const h2 = document.querySelector("h2");
console.log(h2);

// with its class (group)
const group = document.querySelector(".group");
console.log(group);

// by nest selection (ul of the group)
const list = group.querySelector("ul");
console.log(list);

// select multiple elements (all the card)
// cards is a NodeList, looks like an array
const cards = document.querySelectorAll(".card");
console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Yokohama FC)
list.insertAdjacentHTML("afterbegin", "<li>Yokohama <em>FC</em> ⚽️</li>");

// same but more complex (add Moritz!!!)
const team = document.querySelector("#yokohama-fc ul");
const moritz = `<li>
<img id="moritz-hendrik-emil-lange" src="https://avatars.githubusercontent.com/u/69387212?v=4" alt="">
<p>Moritz Hendrik Emil Lange</p>
</li>`;

team.insertAdjacentHTML("beforeend", moritz);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
// group.style.color = "red";
// group.style.color = "red";
group.style.backgroundColor = "green";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");


// Read/Write for inputs (change the value in the email input)
const mail = document.querySelector("#email");
console.log(mail.value);
mail.value = "yann@me.com"

// Read/Write the (inner) text and HTML content (Yokohama FC ⚽️ title)
const title = document.querySelector("#yokohama-fc h3");

console.log(title.innerText);
console.log(title.innerHTML);

// title.innerText = "Hello <em> everyone </em>";
title.innerHTML = "Hello <em> everyone </em>";