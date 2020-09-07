let popup = document.querySelector(".popup");

var showPopup = document.querySelector(".main__button");

showPopup.onclick = function () {
  popup.classList.toggle("clicked");
};

let closeButton = document.querySelector(".close-popup");

closeButton.onclick = function () {
  popup.classList.remove("clicked");
};

//burger

let burger = document.getElementById("header__burger");

let burgerList = document.getElementById("header__body");

burger.onclick = function () {
  burgerList.classList.toggle("show");
};
