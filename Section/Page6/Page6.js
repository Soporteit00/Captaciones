const wrapper = document.getElementById("wrapper");
const avanzarBtn = document.getElementById("avanzarBtn");

wrapper.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

wrapper.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});