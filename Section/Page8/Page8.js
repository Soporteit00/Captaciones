const cardB = document.getElementById("cardB");
const avanzarBtn = document.getElementById("avanzarBtn");

cardB.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

cardB.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});