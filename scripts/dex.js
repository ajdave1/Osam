const scrollLeft = document.getElementById("leftbutton");
const scrollRight = document.getElementById("rightbutton");
const container = document.querySelector(".locations");
const adsX = document.querySelector(".ads-x");
const ads = document.querySelector(".ads");
const input = document.querySelector("#search-now");

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

// const uls = document.querySelectorAll("#ul-li-a");
// uls.forEach(el => {
//   el.addEventListener("click", () => {
//     navigation.style = "display:";
//     mavigation.classList.add("hide-nav");
//   });
// });
function redirect() {
  const links = document.querySelectorAll("#link-to-def");
  links.forEach(link => {
    link.addEventListener("click", el => {
      let data = JSON.stringify(link.innerHTML);
      console.log(data);
      localStorage.clear();
      localStorage.setItem("location", data);
    });
  });
}
redirect();

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
        <li><a href="default.html" id="link-to-def" >${local}</a></li>
     `;
  });

  redirect();
  if (event.key === "Enter") {
    let data = JSON.stringify(input.value);
    console.log(data);
    localStorage.clear();
    localStorage.setItem("location", data);
    document.location = "default.html";
  }
  locals = [];
  setTimeout(() => {
    searchTemp.classList.remove("view-item");
    searchTemp.classList.add("hide-item");
  }, 10000);
});
