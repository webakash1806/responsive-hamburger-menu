hamburger = document.getElementById("hamburg")
cross = document.getElementById("cros")
sideBar = document.getElementById("side-bar")

function ham() {
    hamburger.classList.toggle("not-active")
    cross.classList.toggle("active")
    sideBar.classList.toggle("side-active")
}