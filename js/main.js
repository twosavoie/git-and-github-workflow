// https://codesandbox.io/s/js-lesson06-challenge01-solution-v1o84?file=/js/script.js:0-825
// 1. When page loads, all lists are hidden
// 2. When a button is clicked, the list for that button is shown
// 3. There's a way to close the list - an x or clicking outside of the list
// 4. A modal for help 




const button = document.querySelectorAll("button");
var list = document.querySelector(".list");
var modalX = document.querySelector(".modal-x");

button.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.nextElementSibling.classList.contains("hide")) {
      button.nextElementSibling.classList.remove("hide");
      button.nextElementSibling.classList.add("show");
    } else {
      button.nextElementSibling.classList.remove("show");
      button.nextElementSibling.classList.add("hide");
    }
  });
});
// Closes all lists when the Escape key is clicked
button.forEach((button) => {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (button.nextElementSibling.classList.contains("show")) {
        closeList();
      }
    }
  });
  var closeList = function () {
    button.nextElementSibling.classList.remove("show");
    button.nextElementSibling.classList.add("hide");
  };
});



// // Bonus Step
// // var openModal = function () {
// //   modal.classList.add("show-modal");
// //   button.innerText = "You've got this!!!";
// // };

// button.addEventListener("click", function () {
//   modal.classList.add("show-modal");
//   button.innerText = "You've got this!!!";

//   // Bonus Step
//   // openModal();
// });

// modalX.addEventListener("click", function () {
//   closeModal();
// });


