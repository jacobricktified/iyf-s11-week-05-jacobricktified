const source = document.getElementById("source");

const target = document.getElementById("target");

const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", () => {

    target.innerHTML = source.innerHTML;

});