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
const heading = document.querySelector("h1");
console.log(heading);
// 2. All elements with class "content"
const contents = document.querySelectorAll(".content");
console.log(contents);
// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");
console.log(form);
// 4. The email input
const emailInput = document.getElementById("email");
console.log(emailInput);
// 5. All list items in the nav
const navItems = document.querySelectorAll("nav li");
console.log(navItems);
// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log(firstNavLink);
// 7. The last paragraph
const lastParagraph = document.querySelector("p:last-of-type");
console.log(lastParagraph);



const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);          // header

// Children
console.log(nav.children);               // HTMLCollection
console.log(nav.firstElementChild);      // ul
console.log(nav.lastElementChild);       // ul

// Siblings
const article = document.querySelector("article");
console.log(article.nextElementSibling);     // section
console.log(article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");  // all links inside nav

// ==============================
// Exercise: DOM Navigation
// ==============================

// ----------------------------------
// 1. Select the header, then navigate to the nav inside it
// ----------------------------------
const header = document.querySelector("header");
const nav = header.querySelector("nav");

console.log("Header:", header);
console.log("Nav inside header:", nav);


// ----------------------------------
// 2. Select the first nav-link,
// then get its parent <li>
// ----------------------------------
const firstNavLink = document.querySelector(".nav-link");
const parentListItem = firstNavLink.parentElement;

console.log("First nav link:", firstNavLink);
console.log("Parent <li>:", parentListItem);



// ----------------------------------
// 3. Select the article,
// then get its next sibling (section)
// ----------------------------------
const article = document.querySelector("article");
const nextSection = article.nextElementSibling;

console.log("Article:", article);
console.log("Next sibling (section):", nextSection);

// ----------------------------------
// 4. Select the ul,
// then get all its child li elements
// ----------------------------------
const ul = document.querySelector(".nav-list");
const listItems = ul.children;

console.log("UL:", ul);
console.log("Child <li> elements:", listItems);

// ----------------------------------
// 5. Start from the footer
// and navigate up to the body
// ----------------------------------
const footer = document.querySelector("footer");
const body = footer.parentElement;

console.log("Footer:", footer);
console.log("Body:", body);


// text content 
const h1 = document.querySelector("h1");

// Reading text
console.log(h1.textContent);     // Includes hidden text
console.log(h1.innerText);       // Only visible text

// Modifying text
h1.textContent = "New Title";
//html content
const article = document.querySelector("article");

// Reading HTML
console.log(article.innerHTML);

// Modifying HTML (careful with security!)
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Safer: textContent (escapes HTML)
const userInput = "<script>alert('hack!')</script>";
article.textContent = userInput;  // Displays as text, not executed

// attributes
const link = document.querySelector(".nav-link");

// Get attribute
console.log(link.getAttribute("href"));
console.log(link.href);  // Property access

// Set attribute
link.setAttribute("href", "https://example.com");
link.href = "https://example.com";  // Same result

// Check attribute
console.log(link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes
// <element data-id="123" data-category="tech">
const element = document.querySelector("[data-id]");
console.log(element.dataset.id);        // "123"
console.log(element.dataset.category);  // "tech"
element.dataset.newAttr = "value";    // Creates data-new-attr
// styles
const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles (use classes instead when possible!)
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});