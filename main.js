// const buttons = document.querySelectorAll(".about__block");
// const items = document.querySelectorAll(".about__midle");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     let atributs = button.getAttribute("data-tab");
//     let getAtribut = document.querySelector(atributs);

//     buttons.forEach((btn) => btn.classList.remove("about__block_active"));
//     items.forEach((item) => item.classList.remove("about__midle_active"));

//     button.classList.add("about__block_active");
//     getAtribut.classList.add("about__midle_active");
//   });
// });
//Tabs

const tabs = document.querySelectorAll('.about__block')
const pages = document.querySelectorAll(".about__midle")

tabs.forEach(element => {
  element.addEventListener('click', () => {
    let getAtributs = element.getAttribute("data-tab")
    let atribut = document.querySelector(getAtributs)
    tabs.forEach(btn => btn.classList.remove('about__block_active'))
    pages.forEach(btn => btn.classList.remove('about__midle_active'))
    element.classList.add('about__block_active')
    atribut.classList.add('about__midle_active')
  })
});