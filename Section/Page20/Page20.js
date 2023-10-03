const logo = document.getElementById("logo");
const avanzarBtn = document.getElementById("avanzarBtn");

logo.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

logo.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});