# Week 5: DOM Manipulation & Interactive To-Do List

## Author
- **Name:** Jacob Gichira Mbuco
- **GitHub:** [@jacobricktified](https://github.com/jacobricktified)
- **Date:** July 20, 2026

## Project Description
This project focuses on learning and applying JavaScript DOM Manipulation techniques to create interactive web pages. Throughout the week, I practiced selecting and traversing DOM elements, modifying page content and styles, handling user events, creating and removing elements dynamically, validating forms, and building a fully functional Interactive To-Do List application.

The mini-project demonstrates how JavaScript can be used to create responsive user interfaces without reloading the page.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- DOM API
- Event Listeners

## Features
- Select and manipulate DOM elements
- Modify text, HTML content, attributes, and styles
- Create and remove elements dynamically
- Handle mouse, keyboard, and form events
- Interactive To-Do List
- Add new tasks
- Mark tasks as completed
- Delete individual tasks
- Filter tasks (All, Active, Completed)
- Display remaining task count
- Clear completed tasks
- Event delegation for efficient event handling
- Form validation and input handling

## How to Run
1. Clone this repository:

```bash
git clone https://github.com/jacobricktified/iyf-s11-week-05-jacobricktified.git
```

2. Navigate into the project folder.

3. Open `index.html` in your preferred browser.

**OR**

If using a development server:

```bash
npm install
npm start
```

## Lessons Learned
During this project I learned how to:

- Understand the structure of the Document Object Model (DOM)
- Select elements using different DOM selection methods
- Traverse parent, child, and sibling elements
- Modify HTML content safely using `textContent` and `innerHTML`
- Change element attributes and inline styles
- Dynamically create, insert, clone, and remove elements
- Handle user interactions using JavaScript event listeners
- Work with the Event object
- Use event bubbling and event delegation
- Validate forms before submission
- Build a complete interactive web application using only JavaScript

## Challenges Faced
### Managing Dynamic Elements
Newly created elements did not automatically inherit event listeners. I solved this by implementing **event delegation**, allowing one parent element to manage events for all child elements.

### Preventing Invalid User Input
Users could submit empty tasks. I added form validation to prevent empty submissions and clear the input after successful task creation.

### Updating the Interface Efficiently
Keeping the task list and statistics synchronized was challenging. I solved this by creating reusable rendering functions that update the interface whenever the application state changes.

### DOM Manipulation
Understanding when to use `querySelector()`, `querySelectorAll()`, `getElementById()`, and other selection methods required practice. Completing the exercises improved my confidence in choosing the appropriate method.


## Live Demo (If Deployed)

Coming Soon

---
### Repository
`iyf-s11-week-05-jacobbricktified`