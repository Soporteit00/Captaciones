const card = document.getElementById("card");
const avanzarBtn = document.getElementById("avanzarBtn");

card.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

card.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});