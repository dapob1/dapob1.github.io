const menuNav = document.querySelector(".menuNav")
const menuOpenButton = document.querySelector('.menuOpenButton')
const menuCloseButton = document.querySelector('.menuCloseButton')
const menuHomeButton = document.querySelector('.menuHomeButton')

menuOpenButton.addEventListener("click", () => {
    menuNav.classList.remove("hidden")
})

menuCloseButton.addEventListener("click", () => {
    menuNav.classList.toggle("hidden")
})

menuHomeButton.addEventListener("click", () => {
    menuNav.classList.toggle("hidden")
})