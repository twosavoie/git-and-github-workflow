// https://codesandbox.io/s/js-lesson06-challenge01-solution-v1o84?file=/js/script.js:0-825
// 1. When page loads, all lists are hidden
// 2. When a button is clicked, the list for that button is shown
// 3. There's a way to close the list - an x or clicking outside of the list
// 4. A modal for help 




// const button = document.querySelectorAll("button");
// var list = document.querySelector(".list");
// var modalX = document.querySelector(".modal-x");

// button.forEach((button) => {
//   console.log("working?");
//   button.addEventListener("click", function() {
//     list.classList.remove("hide");
//     list.classList.add("show");
//   });
// });

// var closeModal = function () {
//   modal.classList.remove("show-modal");
//   button.innerText = "Who's got this?";
// };

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

// document.addEventListener("keydown", function (e) {
//   // console.log(e.key);
//   if (e.key === "Escape") {
//     if (modal.classList.contains("show-modal")) {
//       closeModal();
//     }
//   }
// });
