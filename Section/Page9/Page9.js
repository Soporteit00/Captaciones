const content = document.getElementById("content");
const avanzarBtn = document.getElementById("avanzarBtn");

content.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

content.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});