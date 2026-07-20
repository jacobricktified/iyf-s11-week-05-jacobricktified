const button = document.getElementById("toggle-images");

let hidden = false;

button.addEventListener("click", () => {

    const images = document.querySelectorAll("img");

    hidden = !hidden;

    images.forEach(image => {

        image.style.display = hidden ? "none" : "block";

    });

    button.textContent = hidden
        ? "Show Images"
        : "Hide Images";

});