document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", revealOnScroll);
});

function revealOnScroll() {
    var animatedPage = document.querySelector(".animated-page");
    var boxPosition = animatedPage.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2; 
    if (boxPosition < screenPosition) {
        animatedPage.classList.add("animated");
    }
}
