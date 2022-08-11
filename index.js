const menu = document.querySelector(".menu-bars");
const item = document.querySelectorAll(".item");

menu.addEventListener("click", () => {
  item.forEach((i) => i.classList.toggle("show"));
});

