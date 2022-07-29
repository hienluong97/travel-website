/* show and close category sidebar */

var categoryModal = document.querySelector(".category__sidebar");
var categoryElement = document.querySelector(".category__wrap");
function showCategory() {
  categoryModal.classList.add("show");
  document.addEventListener("mousedown", (e) => {
    if (!categoryElement.contains(e.target)) {
      categoryModal.classList.remove("show");
    }
  });
}

function closeCategory() {
  categoryModal.classList.toggle("show");
}
if (categoryElement.classList.contains("hide")) {
  document.removeEventListener("mousedown", (e) => {
    if (!categoryElement.contains(e.target)) {
      console.log("doi");
      console.log(categoryElement.classList.contains("hide"));
      categoryModal.classList.remove("show");
    }
  });
}

/* show and close category sidebar */
var spMenuElment = document.querySelector(".sp__menu__sidebar");
function showSpMenu() {
  spMenuElment.classList.toggle("left");
  document.addEventListener("mousedown", (e) => {
    if (!spMenuElment.contains(e.target)) {
      spMenuElment.classList.remove("left");
    }
  });
}
function closeMenuSidebar() {
  spMenuElment.classList.remove("left");
}
if (!spMenuElment.classList.contains("left")) {
  document.removeEventListener("mousedown", (e) => {
    if (!spMenuElment.contains(e.target)) {
      spMenuElment.classList.remove("left");
    }
  });
}

/* show and close seach search__modal */
function showCloseModal() {
  var modalElement = document.querySelector(".search__modal");
  modalElement.classList.toggle("display");
}
