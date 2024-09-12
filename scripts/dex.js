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
  container.scrollLeft -= 279;
});
scrollRight.addEventListener("click", () => {
  container.scrollLeft += 279;
});
const popularLocations = [
  {
    image: "./assets/Lagos.jpeg",
    name: "LAGOS",
  },
  {
    image: "./assets/Abuja.jpeg",
    name: "ABUJA",
  },
  {
    image: "./assets/ibadan.png",
    name: "Ibadan",
  },
  {
    image: "./assets/Ontario CA.jpg",
    name: "Ontario Canada",
  },
  {
    image: "./assets/Lagos.jpeg",
    name: "LAGOS",
  },
];

popularLocations.forEach(location => {
  container.innerHTML += `

<div class="card">
                    <div class="card-image">
                        <img src="${location.image}" alt="${location.name} image">

                    </div>
                    <div class="card-name">
                        <a href="default.html" id="link-to-def">${location.name}</a>
                    </div>
                </div>

`;
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
const input = document.querySelector("#search-now");
const searchTemp = document.querySelector(".search-temp");
const searchUL = document.querySelector(".search-temp ul");
input.addEventListener("keydown", () => {
  searchTemp.classList.add("view-item");
  searchTemp.classList.remove("hide-item");
  const searching = input.value.toLowerCase();
  let locals = [];
  properteas.forEach(prop => {
    const location = prop.location;
    const found = location.includes(searching);

    if (found) {
      locals.push(location);
    }
  });
  locals.forEach(local => {
    searchUL.innerHTML = `
        <li><a href="default.html" id="link-to-def">${local}</a></li>
     `;
  });
  locals = [];
});
