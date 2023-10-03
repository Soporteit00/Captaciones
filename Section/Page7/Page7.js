const second = document.getElementById("second");
const avanzarBtn = document.getElementById("avanzarBtn");

second.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

second.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});