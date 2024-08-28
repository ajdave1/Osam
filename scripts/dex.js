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
    document.querySelector(".logo").classList.add("logo-sticky");
  } else {
    search_bar.classList.remove("sticky");
    document.querySelector(".logo").classList.remove("logo-sticky");
  }
});

const uls = document.querySelectorAll("#ul-li-a");
uls.forEach(el => {
  el.addEventListener("click", () => {
    navigation.style = "display:";
    mavigation.classList.add("hide-nav");
  });
});
const links = document.querySelectorAll("#link-to-def");
links.forEach(link => {
  link.addEventListener("click", el => {
    let data = JSON.stringify(link.innerHTML);
    console.log(data);
    localStorage.clear();
    localStorage.setItem("location", data);
  });
});
const initiateBtn = document.querySelector(".i-properties");
initiateBtn.addEventListener("click", () => {
  let data = JSON.stringify(initiateBtn.innerHTML);
  localStorage.clear();
  localStorage.setItem("toInitial", data);
});
function redirect() {
  setTimeout(() => {
    // document.location = "home.html";
    localStorage.setItem("search-input", JSON.stringify(this.value));
    console.log(this.value);
  }, 1000);
}
