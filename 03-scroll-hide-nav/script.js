const navbar = document.getElementById("nav");



var yScroll = window.scrollY;

window.addEventListener("scroll", () => {
    if (yScroll < window.scrollY){
        navbar.style.transform = "translateY(-60px)";
    } else {
        navbar.style.transform = "";
    }
    yScroll = window.scrollY;
})