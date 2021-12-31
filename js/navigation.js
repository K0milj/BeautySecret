let openNav = document.getElementById("openBtn");
let closeNav = document.getElementById("exitBtn");

openNav.addEventListener("click", function () {
    document.getElementById("navMobile").style.display = "flex";
});

closeNav.addEventListener("click", function () {
    document.getElementById("navMobile").style.display = "none";
});

function closeNavigation() {
    document.getElementById("navMobile").style.display = "none";
}