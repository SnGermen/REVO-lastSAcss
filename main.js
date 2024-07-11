let buttons = document.querySelectorAll(".about__block")

buttons.forEach((i) => {
  i.addEventListener("click", () => {

    buttons.forEach((deleted) => deleted.classList.remove("about__block_active"))

    i.classList.add("about__block_active")
  })
})
//Tabs