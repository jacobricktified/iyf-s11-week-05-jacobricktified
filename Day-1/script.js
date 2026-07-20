const button = document.getElementById("color-btn");

button.addEventListener("click", () => {

    const headings = document.querySelectorAll("h1, h2, h3");

    const randomColor = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    headings.forEach(heading => {
        heading.style.color = randomColor;
    });

});