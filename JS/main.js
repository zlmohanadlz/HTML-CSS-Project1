// Nav burger icon click

let nav = document.querySelector(".links");

nav.addEventListener("click", function () {
    this.classList.toggle("open");
});

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    }
};
