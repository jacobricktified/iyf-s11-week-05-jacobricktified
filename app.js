// ========================================
// DOM Elements
// ========================================

const form = document.getElementById("todo-form");

const input = document.getElementById("todo-input");

const todoList = document.getElementById("todo-list");

const itemsLeft = document.getElementById("items-left");

const filters = document.querySelectorAll(".filter");

const clearCompletedBtn =
document.getElementById("clear-completed");

// ========================================
// State
// ========================================

let todos = [];

let currentFilter = "all";

// ========================================
// Add Todo
// ========================================

function addTodo(text){

    if(text.trim()==="") return;

    todos.push({

        id:Date.now(),

        text:text,

        completed:false

    });

    input.value="";

    renderTodos();

}

// ========================================
// Toggle Todo
// ========================================

function toggleTodo(id){

    todos=todos.map(todo=>{

        if(todo.id===id){

            todo.completed=!todo.completed;

        }

        return todo;

    });

    renderTodos();

}

// ========================================
// Delete Todo
// ========================================

function deleteTodo(id){

    todos=todos.filter(todo=>todo.id!==id);

    renderTodos();

}

// ========================================
// Update Stats
// ========================================

function updateStats(){

    const active=todos.filter(todo=>!todo.completed);

    itemsLeft.textContent=
    `${active.length} item${active.length!==1?"s":""} left`;

}

// ========================================
// Create Todo Element
// ========================================

function createTodoElement(todo){

    const li=document.createElement("li");

    li.className="todo";

    li.dataset.id=todo.id;

    const span=document.createElement("span");

    span.textContent=todo.text;

    if(todo.completed){

        span.classList.add("completed");

    }

    const del=document.createElement("button");

    del.textContent="Delete";

    del.className="delete";

    li.appendChild(span);

    li.appendChild(del);

    return li;

}

// ========================================
// Render Todos
// ========================================

function renderTodos(){

    todoList.innerHTML="";

    let filtered=todos;

    if(currentFilter==="active"){

        filtered=todos.filter(todo=>!todo.completed);

    }

    if(currentFilter==="completed"){

        filtered=todos.filter(todo=>todo.completed);

    }

    filtered.forEach(todo=>{

        todoList.appendChild(
            createTodoElement(todo)
        );

    });

    updateStats();

}

// ========================================
// Filter Todos
// ========================================

function filterTodos(filter){

    currentFilter=filter;

    filters.forEach(btn=>{

        btn.classList.remove("active");

        if(btn.dataset.filter===filter){

            btn.classList.add("active");

        }

    });

    renderTodos();

}

// ========================================
// Form Submit
// ========================================

form.addEventListener("submit",e=>{

    e.preventDefault();

    addTodo(input.value);

});

// ========================================
// Event Delegation
// ========================================

todoList.addEventListener("click",e=>{

    const li=e.target.closest(".todo");

    if(!li) return;

    const id=Number(li.dataset.id);

    if(e.target.classList.contains("delete")){

        deleteTodo(id);

        return;

    }

    if(e.target.tagName==="SPAN"){

        toggleTodo(id);

    }

});

// ========================================
// Double Click Edit
// ========================================

todoList.addEventListener("dblclick",e=>{

    if(e.target.tagName!=="SPAN") return;

    const span=e.target;

    const li=span.parentElement;

    const id=Number(li.dataset.id);

    const edit=document.createElement("input");

    edit.type="text";

    edit.value=span.textContent;

    edit.className="edit-input";

    li.replaceChild(edit,span);

    edit.focus();

    edit.addEventListener("keydown",event=>{

        if(event.key==="Enter"){

            todos=todos.map(todo=>{

                if(todo.id===id){

                    todo.text=edit.value;
                }

                return todo;

            });

            renderTodos();

        }

        if(event.key==="Escape"){

            renderTodos();

        }

    });

});

// ========================================
// Filter Buttons
// ========================================

filters.forEach(button=>{

    button.addEventListener("click",()=>{

        filterTodos(button.dataset.filter);

    });

});

// ========================================
// Clear Completed
// ========================================

clearCompletedBtn.addEventListener("click",()=>{

    todos=todos.filter(todo=>!todo.completed);

    renderTodos();

});

// ========================================
// Initial Render
// ========================================

renderTodos();