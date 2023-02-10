// https://codesandbox.io/s/js-lesson06-challenge01-solution-v1o84?file=/js/script.js:0-825
// 1. When page loads, all lists are hidden
// 2. When a button is clicked, the list for that button is shown
// 3. There's a way to close the list - an x or clicking outside of the list
// 4. A modal for help 




const button = document.querySelectorAll("button");
var list = document.querySelector(".list");
// Maybe use a class instead since there are multiple types of list?
var gitListItem = document.querySelectorAll("li");
var modalX = document.querySelector(".modal-x");

// Toggles classes to show and hide lists
button.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.nextElementSibling.classList.contains("hide")) {
      button.nextElementSibling.classList.remove("hide");
      button.nextElementSibling.classList.add("show");
    } else {
      closeList();
    }
  });

  // Closes all lists when the Escape key is clicked
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (button.nextElementSibling.classList.contains("show")) {
        closeList();
      }
    }
  });

  // event handler that closes list
  var closeList = () => {
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


