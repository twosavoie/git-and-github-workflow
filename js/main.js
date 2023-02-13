const revealListButton = document.querySelectorAll(".reveal-list");
const gitListItem = document.querySelectorAll(".git-list-item");
// todo - move event handlers out and consolidate them into a utility function
// todo - move escape key event listener out and consolidate
// todo - add a reset button
// todo - add show and hide icons to button
// todo - add ability to toggle images of the command line

// Toggles classes to show and hide lists
revealListButton.forEach((revealListButton) => {
  console.log(revealListButton.nextElementSibling);
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






