const front = document.getElementById("front");
const avanzarBtn = document.getElementById("avanzarBtn");

front.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

front.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});