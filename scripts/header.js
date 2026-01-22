const links = document.getElementById("links")
const hamMenu = document.getElementById("hamMenu")

hamMenu.addEventListener("click", () => {
    links.classList.toggle("active")
})