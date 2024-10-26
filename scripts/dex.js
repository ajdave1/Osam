import { methods } from "./methods.js";
import { proper } from "./propeties.js";
const { renderP_locations, viewmobilenav, redirect } = methods;
const scrollLeft = document.getElementById("leftbutton");
const scrollRight = document.getElementById("rightbutton");
const container = document.querySelector(".locations");
const opennav = document.getElementById("open-nav");
const closenav = document.getElementById("close-nav");
const navigation = document.querySelector(".navigation");
const adsX = document.querySelector(".ads-x");
const ads = document.querySelector(".ads");
const input = document.querySelector("#search-now");
renderP_locations();
viewmobilenav(navigation, opennav, closenav);
redirect();

scrollLeft.addEventListener("click", () => {
  container.scrollLeft -= 279;
});
scrollRight.addEventListener("click", () => {
  container.scrollLeft += 279;
});
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
const initiateBtn = document.querySelectorAll(".i-properties");
initiateBtn.forEach(button => {
  button.addEventListener("click", () => {
    let data = button.innerHTML;
    if (data === "Buy") {
      data = "sale";
    }
    data = data.toLowerCase();
    data = "for " + data;
    console.log(data);
    localStorage.clear();
    localStorage.setItem("toInitial", data);
  });
});

input.addEventListener("keydown", event => {
  const searchUL = document.querySelector(".search-temp ul");
  const input = document.querySelector("#search-now");
  const searchTemp = document.querySelector(".search-temp");
  searchTemp.classList.add("view-item");
  searchTemp.classList.remove("hide-item");
  const searching = input.value.toLowerCase();
  let locals = [];
  proper.forEach(prop => {
    const location =
      prop.location.toLocaleLowerCase().trim() +
      " " +
      prop.state.toLocaleLowerCase().trim();
    const found = location.includes(searching);
    if (found) {
      locals.push(location);
    }
  });
  searchUL.innerHTML = "";
  locals.forEach(local => {
    searchUL.innerHTML += `
        <li><a href="home.html" id="link-to-def" >${local}</a></li>
     `;
  });
  redirect();
  if (event.key === "Enter") {
    let data = JSON.stringify(input.value);
    console.log(data);
    localStorage.clear();
    localStorage.setItem("location", data);
    document.location = "home.html";
  }
  locals = [];
  setTimeout(() => {
    searchTemp.classList.remove("view-item");
    searchTemp.classList.add("hide-item");
  }, 10000);
});
