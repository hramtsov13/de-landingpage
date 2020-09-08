let modal = document.getElementById("modal-contact");
let modalButton = document.getElementById("form-button");
let form = document.getElementById("contact-form");
let formButton = document.getElementById("form-submit");

function closeModal() {
  modal.classList.toggle("disable"); //close by click in any place
  document.querySelector("body").style.overflow = "auto"; //page scroll
}

modalButton.addEventListener("click", function () {
  modal.classList.toggle("disable"); //show modal
  document.querySelector("body").style.overflow = "hidden"; //page scroll
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  closeModal();
});
