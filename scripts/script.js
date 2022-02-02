// ====== Context Menu click-events ======

const contextMenu = document.querySelector(".wrapper"),
  shareMenu = contextMenu.querySelector(".share-menu");

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  let x = e.offsetX,
    y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = contextMenu.offsetWidth,
    cmHeight = contextMenu.offsetHeight;

  if (x > winWidth - cmWidth - shareMenu.offsetWidth) {
    shareMenu.style.left = "-200px";
  } else {
    shareMenu.style.left = "";
    shareMenu.style.right = "-200px";
  }

  x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});

document.addEventListener(
  "click",
  () => (contextMenu.style.visibility = "hidden")
);

// ====== Download progress ======

let button = document.querySelector(".dl");

button.addEventListener("click", () => {
  button.classList.add("active");

  setTimeout(() => {
    button.classList.remove("active");
    button.classList.add("inactive");
    document
      .querySelector("i")
      .classList.replace("bx-cloud-download", "bx-check-circle");
    document.querySelector(".dl-text").innerText = "Completed";
  }, 6000);
});
