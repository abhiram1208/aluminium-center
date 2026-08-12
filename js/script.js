window.addEventListener("scroll", () => {
  document.body.style.fontSize =
    window.scrollY > 300 ? "15px" : "16px";
});
