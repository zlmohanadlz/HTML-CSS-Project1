// Nav burger icon click

let nav = document.querySelector(".links");

nav.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("open");
});

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    }
};

document.addEventListener("click", () => {
    nav.classList.remove("open");
});
