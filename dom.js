// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice: Select these elements
// 1. The h1 element
// ==============================
// 1. The h1 element
// ==============================
const heading = document.querySelector("h1");
console.log(heading);
// 2. All elements with class "content"
// 3. The form with id "contact-form"
// 4. The email input
// 5. All list items in the nav
// 6. The first .nav-link
// 7. The last paragraph