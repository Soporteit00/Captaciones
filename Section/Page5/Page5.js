const back = document.getElementById("back");
const avanzarBtn = document.getElementById("avanzarBtn");

back.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

back.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});