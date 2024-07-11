const buttons = document.querySelectorAll(".about__block")
const items = document.querySelectorAll(".about__midle")
buttons.forEach((i) => {
  i.addEventListener("click", () => {
    let atributs = i.getAttribute("data-tab")
    let getAtribut = document.querySelector(atributs)


    buttons.forEach((deleted) => deleted.classList.remove("about__block_active"))
    items.forEach((deleted) => deleted.classList.remove("about__midle_active"))
    i.classList.add("about__block_active")
    getAtribut.classList.add("about__midle_active")
  })
})
//Tabs