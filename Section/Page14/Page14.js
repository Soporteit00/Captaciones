const card1 = document.getElementById("card1");
const avanzarBtn = document.getElementById("avanzarBtn");

card1.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

card1.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});