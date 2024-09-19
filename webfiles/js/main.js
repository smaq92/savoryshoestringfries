let btn = document.querySelector(".tog-btn");
let nav = document.querySelector("#main-menu");

btn.addEventListener("click", function () {
  console.log("button is clicked")
  nav.classList.toggle("show-nav");
  let expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);
});
