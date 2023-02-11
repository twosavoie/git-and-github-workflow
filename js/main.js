const revealListButton = document.querySelectorAll(".reveal-list");
const gitListItem = document.querySelectorAll(".git-list-item");
let openList = [];
// Toggles classes to show and hide lists
revealListButton.forEach((revealListButton) => {
  revealListButton.addEventListener("click", function () {
    if (revealListButton.nextElementSibling.classList.contains("hide")) {
      revealListButton.nextElementSibling.classList.remove("hide");
      revealListButton.nextElementSibling.classList.add("show");
      let updatedOpenList = openList
      updatedOpenList = [...openList, revealListButton.nextElementSibling];
      console.log(updatedOpenList);
      return updatedOpenList;
    } else {
      closeList();
      unstrikeListItem();
    }
  });
}); // added if this works

  // Closes all lists when the Escape key is clicked
  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "Escape") {
  //     if (revealListButton.nextElementSibling.classList.contains("show")) {
  //       closeList();
  //     }
  //   }
  // });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (updatedOpenList.classList.contains("show")) {
        closeList();
      }
    }
  });


  // event handler that closes list
  // function closeList() {
  //   revealListButton.nextElementSibling.classList.remove("show");
  //   revealListButton.nextElementSibling.classList.add("hide");
  // }
// });
function closeList() {
  updatedOpenList.classList.remove("show");
  updatedOpenList.classList.add("hide");
}



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






