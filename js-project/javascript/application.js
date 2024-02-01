console.log("Hello from application.js!");

// ////////
// Select DOM elements
// ////////

// with its ID (Sarah)
const sarah = document.querySelector("#sarah-amour");
console.log(sarah);

// with its tag type (h2)
const title = document.querySelector("h2");
console.log(title);

// with its class (group)
const group = document.querySelector(".group");
console.log(group);

// by nest selection (ul of the group)
const list = group.querySelector("ul");
console.log(list);

// select multiple elements (all the card)
// cards is a NodeList, looks like an array
const card = document.querySelector(".card");
console.log(card); // the first card
const cards = document.querySelectorAll(".card");
console.log(cards); // a nodeList, a kind of array

// ////////
// Modify the DOM
// ////////

// add an HTML element (Roppongi Club)
list.insertAdjacentHTML("beforeend", "<li>Roppongi <em>Club</em> 🐺</li>");

// same but more complex (add Noah!!!)
const firstCardList = document.querySelector(".card ul");
firstCardList.insertAdjacentHTML(
  "afterbegin", 
  `<li>
    <img id="noah-taiga-endo-meier" src="https://avatars.githubusercontent.com/u/135783511?v=4" alt="">
    <p>Noah Taiga Endo (meier)</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
// group.style.color = "red";
group.style.backgroundColor = "green";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");
group.classList.toggle("text-white");


// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
console.log(email.value);
email.value = "yann@lewagon.org";

// Read/Write the (inner) text and HTML content (Yokohama FC ⚽️ title)
const yoko = document.querySelector("#yokohama");
console.log(yoko.innerText);
console.log(yoko.innerHTML);

yoko.innerHTML = "Hello <em>#1508</em>";