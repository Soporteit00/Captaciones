const botones = document.getElementById("botones");
const avanzarBtn = document.getElementById("avanzarBtn");

botones.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

botones.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});