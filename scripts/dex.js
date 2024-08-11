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
