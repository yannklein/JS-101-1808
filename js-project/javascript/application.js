console.log("Hello from application.js!");

// ////////
// Select DOM elements
// ////////

// document.querySelector(CSS_SELECTOR)

// with its ID (Bart)
const bart = document.querySelector("#bartlomiej-mikorski");
console.log(bart);

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

// add an HTML element (Yokohama FC)
const teamList = document.querySelector(".group ul");
teamList.insertAdjacentHTML(
  "afterbegin", 
  "<li>Yokohama <em>FC</em> ⚽️'</li>"
);

// same but more complex (add Will!!!)
const yokoList = document.querySelector(".card ul");
yokoList.insertAdjacentHTML("beforeend", `
  <li>
    <img id="will-vanderwyden" src="https://d26jy9fbi4q9wx.cloudfront.net/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeFIzQXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--72d9a3cb52de6fe2935c9cc44e8603f09144b674/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQWNocEFjaDdCam9KWTNKdmNEb09ZWFIwWlc1MGFXOXUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--b67d9ded4d28d0969fbb98b4c21b79257705a99a/19984039_10212711788128169_4027026687413755716_o.jpg" alt="">
    <p>Will Vanderwyden</p>
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


// Read/Write for inputs (change the value in the email input)
const mail = document.querySelector("#email");
console.log(mail.value);
mail.value = "yann@lewagon.org";


// Read/Write the (inner) text and HTML content (Yokohama FC ⚽️ title)

const yoko = document.querySelector("#yoko");
console.log(yoko.innerText);
console.log(yoko.innerHTML);

// yoko.innerText = "Hello <em> everyone </em>";
yoko.innerHTML = "Hello <em> everyone </em>";