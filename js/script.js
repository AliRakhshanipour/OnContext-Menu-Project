let $ = document;
let contextMenu = $.getElementById("contextMenu");
let body = $.getElementsByTagName("body")[0];

body.addEventListener("click", () => {
  contextMenu.style.display = "none";
});
body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    contextMenu.style.display = "none";
  }
});

body.addEventListener("contextmenu", (event) => {
  event.returnValue = false;
  contextMenu.style.display = "block";
  contextMenu.style.left = event.pageX;
  contextMenu.style.top = event.pageY;
  //   console.log(event);
});
