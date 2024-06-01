//
//

let scrollTopBtn = document.querySelector(".scroll-top");
window.onscroll = () => {
  if (scrollY >= 600) {
    console.log("object");
    scrollTopBtn.style.right = "3rem";
  } else {
    scrollTopBtn.style.right = "-3rem";
  }
  scrollTopBtn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
};
