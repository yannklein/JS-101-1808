console.log("Hello from application.js!");

// ////////
// Select DOM elements
// ////////

// with its ID (Shinji)
const shinji = document.querySelector("#shinji");
console.log(shinji);

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
const cards = document.querySelectorAll(".card");
console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Minato reds ⛑️)
list.insertAdjacentHTML("beforeend", "<li>Minato reds ⛑️</li>");

// same but more complex (add Vincci!!!)
const yokoCard = document.querySelector(".card ul");
yokoCard.insertAdjacentHTML(
  "beforeend", 
  `<li>
    <img id="kam-ying-leung" src="https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_200,w_200/v1696212707/our5e5ylxkwblhpgnwlh.jpg" alt="">
    <p>Kam Ying Leung</p>
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
const yokoTitle = document.querySelector("h3");
console.log(yokoTitle.innerText);
console.log(yokoTitle.innerHTML);

yokoTitle.innerHTML= "Hello <em>everyone</em>";