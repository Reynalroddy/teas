//declare the environment variables

let openNav = document.querySelector("fa-bars");

let closeNav = document.querySelector(".fa-times");

let navs = document.querySelector(".navbar");
document.addEventListener("click", openNavv);

function openNavv(e) {
  if (e.target.classList.contains("fa-bars")) {
    navs.classList.add("showNav");
  } else if (e.target.classList.contains("fa-times")) {
    navs.classList.remove("showNav");
  }
}
