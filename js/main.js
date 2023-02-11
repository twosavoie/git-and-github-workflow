// https://codesandbox.io/s/js-lesson06-challenge01-solution-v1o84?file=/js/script.js:0-825
// 1. When page loads, all lists are hidden
// 2. When a button is clicked, the list for that button is shown
// 3. There's a way to close the list - an x or clicking outside of the list
// 4. A modal for help 

const revealListButton = document.querySelectorAll(".reveal-list");
// var gitList = document.querySelector(".list");

// Maybe use a class instead since there are multiple types of list?
var gitListItem = document.querySelectorAll(".git-list-item");
var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

// Toggles classes to show and hide lists
revealListButton.forEach((revealListButton) => {
  revealListButton.addEventListener("click", function () {
    if (revealListButton.nextElementSibling.classList.contains("hide")) {
      revealListButton.nextElementSibling.classList.remove("hide");
      revealListButton.nextElementSibling.classList.add("show");
    } else {
      closeList();
    }
  });

  // Closes all lists when the Escape key is clicked
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (revealListButton.nextElementSibling.classList.contains("show")) {
        closeList();
      }
    }
  });
  // event handler that closes list
  function closeList() {
    revealListButton.nextElementSibling.classList.remove("show");
    revealListButton.nextElementSibling.classList.add("hide");
  }
});

// When list item is clicked, it greys out
gitListItem.forEach((gitListItem) => {
  gitListItem.addEventListener("click", function () {
    if (gitListItem.classList.contains("unstruck")) {
      gitListItem.classList.remove("unstruck");
      gitListItem.classList.add("strikeout");
    } else {
      unstrikeListItem();
    }
  });

  // Closes all lists when the Escape key is clicked
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (gitListItem.classList.contains("strikeout")) {
        unstrikeListItem();
      }
    }
  });

  // event handler that closes list
  function unstrikeListItem() {
    gitListItem.classList.remove("strikeout");
    gitListItem.classList.add("unstruck");
  }
});





// // Bonus Step
// var openModal = function () {
//   modal.classList.add("show-modal");
//   button.innerText = "You've got this!!!";
// };

// button.addEventListener("click", function () {
//   modal.classList.add("show-modal");
//   button.innerText = "You've got this!!!";

//   // Bonus Step
//   openModal();
// });

// modalX.addEventListener("click", function () {
//   closeModal();
// });


