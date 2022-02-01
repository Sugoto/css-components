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