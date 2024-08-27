const scrollLeft = document.getElementById("leftbutton");
const scrollRight = document.getElementById("rightbutton");
const container = document.querySelector(".locations");
const adsX = document.querySelector(".ads-x");
const ads = document.querySelector(".ads");

setTimeout(() => {
  ads.classList.add("view-item");
  ads.classList.remove("hide-item");
}, 3000);
adsX.addEventListener("click", () => {
  ads.classList.add("hide-item");
  ads.classList.remove("view-item");
});

scrollLeft.addEventListener("click", () => {
  container.scrollLeft -= 280;
});
scrollRight.addEventListener("click", () => {
  container.scrollLeft += 280;
});

viewmobilenav(navigation, opennav, closenav);
const navBar = document.querySelector("nav");
const search_bar = document.querySelector(".search-container");
window.addEventListener("scroll", () => {
  if (window.scrollY > navBar.offsetHeight) {
    search_bar.classList.add("sticky");
  } else {
    search_bar.classList.remove("sticky");
  }
});

const uls = document.querySelectorAll("#ul-li-a");
uls.forEach(el => {
  el.addEventListener("click", () => {
    navigation.style = "display:";
    mavigation.classList.add("hide-nav");
  });
});
