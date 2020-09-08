let modal = document.getElementById("modal-contact");
let btn = document.getElementById("form-button");

function closeModal() {
  modal.classList.toggle("disable"); //close by click in any place
  document.querySelector("body").style.overflow = "auto"; //page scroll
}

btn.addEventListener("click", function () {
  modal.classList.toggle("disable"); //show modal
  document.querySelector("body").style.overflow = "hidden"; //page scroll
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
