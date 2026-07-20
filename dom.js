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

//creating elements
// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
const article = document.querySelector("article");
article.appendChild(newParagraph);  // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);  // Add before first p

// Modern insertion methods
article.prepend(newParagraph);         // First child
article.append(newParagraph);          // Last child
firstParagraph.before(newParagraph);   // Before sibling
firstParagraph.after(newParagraph);    // After sibling
//removing elements
// Remove an element
const footer = document.querySelector("footer");
footer.remove();

// Remove child
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

// Clear all children
article.innerHTML = "";  // Simple but rebuilds DOM
// OR
while (article.firstChild) {
    article.removeChild(article.firstChild);
}

//cloning elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

// =========================================
// Function: Add a new navigation item
// =========================================
function addNavItem(text, href) {
    // Select the navigation list (<ul>)
    const navList = document.querySelector(".nav-list");

    // Create a new <li> element
    const li = document.createElement("li");

    // Create a new <a> element
    const link = document.createElement("a");

    // Set the link text
    link.textContent = text;

    // Set the href attribute
    link.href = href;

    // Add the nav-link class
    link.classList.add("nav-link");

    // Put the <a> inside the <li>
    li.appendChild(link);

    // Add the <li> to the navigation list
    navList.appendChild(li);
}

// =========================================
// Add new navigation items
// =========================================
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// ============================================
// Click Counter Application
// ============================================

// Counter starts at 0
let count = 0;

// -------------------------------
// Create heading
// -------------------------------
const heading = document.createElement("h2");
heading.textContent = "Click Counter";
document.body.appendChild(heading);

// -------------------------------
// Create counter display
// -------------------------------
const counterDisplay = document.createElement("h1");
counterDisplay.textContent = count;
document.body.appendChild(counterDisplay);

// -------------------------------
// Create Increase Button
// -------------------------------
const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+";
document.body.appendChild(increaseBtn);

// -------------------------------
// Create Decrease Button
// -------------------------------
const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "-";
document.body.appendChild(decreaseBtn);

// -------------------------------
// Create Reset Button
// -------------------------------
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
document.body.appendChild(resetBtn);

// -------------------------------
// Increase Event
// -------------------------------
increaseBtn.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});

// -------------------------------
// Decrease Event
// Count cannot go below 0
// -------------------------------
decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counterDisplay.textContent = count;
    }
});

// -------------------------------
// Reset Event
// -------------------------------
resetBtn.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
});



// ==========================================
// Task 10.2 - Keyboard Shortcuts
// ==========================================

// Select the form and all its inputs
const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input");

// Listen for keyboard shortcuts
document.addEventListener("keydown", function (event) {

    // =====================================
    // Ctrl + S -> Show Saved! alert
    // =====================================
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault(); // Stops the browser Save dialog
        alert("Saved!");
    }

    // =====================================
    // Escape -> Clear all form inputs
    // =====================================
    if (event.key === "Escape") {
        inputs.forEach(input => {
            input.value = "";
        });

        alert("Form cleared!");
    }

    // =====================================
    // Ctrl + Enter -> Submit the form
    // =====================================
    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault(); // Prevent default browser behavior
        form.requestSubmit();   // Submit the form
    }
});

// ==========================================
// Handle form submission
// ==========================================
form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    alert("Form submitted successfully!");

    console.log("Name:", document.getElementById("name").value);
    console.log("Email:", document.getElementById("email").value);
});

// =======================================
// Delegated Task List
// =======================================

// ---------------------------
// Create heading
// ---------------------------
const heading = document.createElement("h2");
heading.textContent = "Task List";
document.body.appendChild(heading);

// ---------------------------
// Create input
// ---------------------------
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a new task";
document.body.appendChild(input);

// ---------------------------
// Create Add button
// ---------------------------
const addButton = document.createElement("button");
addButton.textContent = "Add Task";
document.body.appendChild(addButton);

// ---------------------------
// Create task list
// ---------------------------
const taskList = document.createElement("ul");
document.body.appendChild(taskList);

// =======================================
// Function to create a task
// =======================================
function addTask(taskText) {

    if (taskText.trim() === "") return;

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add delete button to list item
    li.appendChild(deleteBtn);

    // Add list item to ul
    taskList.appendChild(li);

    // Clear input
    input.value = "";
}

// =======================================
// Add Task Button
// =======================================
addButton.addEventListener("click", () => {
    addTask(input.value);
});

// =======================================
// Press Enter to add task
// =======================================
input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        addTask(input.value);
    }

});

// =======================================
// Event Delegation
// ONE event listener for the entire list
// =======================================
taskList.addEventListener("click", function(event) {

    // ---------------------------
    // Delete button clicked
    // ---------------------------
    if (event.target.classList.contains("delete-btn")) {

        event.target.parentElement.remove();

        return;
    }

    // ---------------------------
    // Task clicked
    // Toggle completed class
    // ---------------------------
    if (event.target.tagName === "LI") {

        event.target.classList.toggle("completed");

    }

});

// ===========================================
// Select elements
// ===========================================
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// ===========================================
// Name Validation
// ===========================================
nameInput.addEventListener("input", function (event) {

    const value = event.target.value.trim();

    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters.");
    } else {
        clearError(nameInput);
    }

});

// ===========================================
// Email Validation
// ===========================================
emailInput.addEventListener("input", function (event) {

    const value = event.target.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email.");
    } else {
        clearError(emailInput);
    }

});

// ===========================================
// Form Submission
// ===========================================
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData);

    console.log("Form Data:", data);

    if (isValid(data)) {

        showSuccess("Form submitted successfully!");

        form.reset();

        clearError(nameInput);
        clearError(emailInput);

    }

});

// ===========================================
// Check if form is valid
// ===========================================
function isValid(data) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    if (data.name.trim().length < 2) {

        showError(nameInput, "Name must be at least 2 characters.");

        valid = false;
    }

    if (!emailRegex.test(data.email)) {

        showError(emailInput, "Please enter a valid email.");

        valid = false;
    }

    return valid;

}

// ===========================================
// Show Error
// ===========================================
function showError(input, message) {

    input.classList.add("error");

    let error = input.nextElementSibling;

    if (!error || !error.classList.contains("error-message")) {

        error = document.createElement("div");

        error.classList.add("error-message");

        input.insertAdjacentElement("afterend", error);

    }

    error.textContent = message;

}

// ===========================================
// Clear Error
// ===========================================
function clearError(input) {

    input.classList.remove("error");

    const error = input.nextElementSibling;

    if (error && error.classList.contains("error-message")) {

        error.remove();

    }

}

// ===========================================
// Show Success Message
// ===========================================
function showSuccess(message) {

    let success = document.querySelector(".success-message");

    if (!success) {

        success = document.createElement("div");

        success.classList.add("success-message");

        form.after(success);

    }

    success.textContent = message;

}