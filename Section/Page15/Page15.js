const book = document.getElementById("book");
const avanzarBtn = document.getElementById("avanzarBtn");

book.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

book.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});