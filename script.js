var slideImgs = document.querySelectorAll("#slide img");

function nextSlide() {
    var activeSlideImg = document.querySelector(".active");

    if (activeSlideImg.nextElementSibling != null) {
        activeSlideImg.animate([{ transform: "translate(0px)" },
        { transform: "translate(-1200px)" }], { duration: 500 });
        activeSlideImg.nextElementSibling.animate([{ transform: "translate(1200px)" },
        { transform: "translate(0px)" }], { duration: 500 });
        setTimeout(function () {
            activeSlideImg.classList.remove("active");
        }, 600);
        activeSlideImg.nextElementSibling.classList.add("active");
    } else {
        slideImgs[0].classList.add("active");
        slideImgs[0].animate([{ transform: "translate(1200px)" },
        { transform: "translate(0px)" }], { duration: 500 });
        activeSlideImg.animate([{ transform: "translate(0px)" },
        { transform: "translate(-1200px)" }], { duration: 500 });
        setTimeout(function () {
            activeSlideImg.classList.remove("active");
        }, 499);

    }
}

setInterval(function () {
    nextSlide();
}, 3000);