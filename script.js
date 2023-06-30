// Preloader
const fade = () => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.add("fade");
};

window.addEventListener("load", fade);

// back To Top Button
const backToTop = document.getElementById("top");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("scroll", scrollY > 100);
});

const topFunction = () => {
  document.documentElement.scroll({
    top: 0,
    behaviour: "smooth",
  });
};

backToTop.addEventListener("click", topFunction);

// Change colors of navigation link

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links .active").classList.remove("active");
    link.classList.add("active");
  });
});
