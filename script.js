document.querySelector(".button").addEventListener("click", function () {
  document.querySelector(".collapse").classList.remove("collapse");
  setTimeout(function () {
    document.querySelector(".collapse-horizontal").classList.add("collapse");
  }, 10000);
});
