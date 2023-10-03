const cards = document.getElementById("cards");
const avanzarBtn = document.getElementById("avanzarBtn");

cards.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

cards.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});