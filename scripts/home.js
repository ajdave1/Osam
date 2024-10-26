import { methods } from "./methods.js";
import {
  propertyDetails,
  rendersearch,
  rendersearchcont,
  imageScroller,
} from "./functions.js";
import { proper } from "./propeties.js";
const {
  searchFunction,
  searchproperty,
  suggest,
  select,
  viewmobilenav,
  showAllProperties,
} = methods;
const homenav = document.querySelector(".home-nav");
const opennav = document.getElementById("open-nav");
const properties = document.querySelector(".properties");
const closenav = document.getElementById("close-nav");
const navigation = document.querySelector(".navigation");
const homeNav = document.querySelector(".home-navigation-list");
const usernav = document.querySelector(".user-navigation");
const toggleUserNav = document.querySelector(".user-profile-image");
const homeanchor = document.querySelectorAll("#home-anchor");
const propertiesContainer = document.querySelector(".properties");
const savesearch = document.querySelector(".save-search");
const initialdata = localStorage.getItem("toInitial");
const viewType = document.querySelector(".type-value");
const viewPrice = document.querySelector(".price-value");
const option = document.getElementsByName("selected");
const homeanchor_link = document.querySelectorAll(".home-anchor-link");
const linkdata = JSON.parse(localStorage.getItem("location"));
const searchCont = document.querySelector(".home-search-input");
const userStatus = localStorage.getItem("loginStatus");
if (userStatus === "active") {
  document.querySelector(".profile-details").innerHTML = `
  <div class="user-profile-image">
                    <img src="./assets/user avatar female.avif" alt=" profile image ">
                </div>
                <div class="user-navigation hide-item">
                    <div class="profile-name">
                        ajagbe david
                    </div>
                    <p>Saved home</p>

                    <button class="sign-out-button">
                        Sign Out
                    </button>
                </div>
`;
}
suggest();
select();

if (linkdata) {
  searchCont.value = linkdata;
  searchFunction(searchproperty);
}
if (initialdata) {
  showAllProperties(initialdata);
  localStorage.clear();
}
savesearch.addEventListener("click", () => {
  let properties = [];
  const propDetails = propertyDetails();
  const type = propDetails.type.toLowerCase().trim();
  const maxprice = propDetails.defaultMaxprice;
  const minprice = Number(propDetails.defaultMinprice);
  let searching = propDetails.locate.toLowerCase().trim();
  proper.map(prop => {
    const location =
      prop.location.toLocaleLowerCase().trim() +
      " " +
      prop.state.toLocaleLowerCase().trim();
    const found = location.includes(searching);
    if (found) {
      properties.push(prop);
      rendersearchcont();
    }
  });
  properties.forEach(el => {
    if (
      el.type === type &&
      el.propertyPrice >= minprice &&
      el.propertyPrice <= maxprice
    ) {
      document.querySelector(
        ".location-image"
      ).innerHTML = ` <img src="./property-location/${el.state.toLocaleLowerCase()}.png">`;

      let images = "";
      console.log(el);
      el.propertyImage.forEach(i => {
        images += `<img src ="${i}">`;
      });
      rendersearch(el, images, el.uid);
    }
  });
  imageScroller();
});
viewmobilenav(navigation, opennav, closenav);
opennav.addEventListener("click", () => (homenav.style = "display:none"));
closenav.addEventListener("click", () => (homenav.style = "display:flex"));
toggleUserNav.addEventListener("click", () => {
  UserNavfunction();
});

function UserNavfunction() {
  if (usernav.classList.contains("hide-item")) {
    usernav.classList.remove("hide-item");
    usernav.classList.add("view-drop-down");
    homeNav.classList.add("hide-item");
    homeNav.classList.remove("view-home-nav");
  } else {
    usernav.classList.add("hide-item");
    usernav.classList.remove("view-drop-down");
    homeNav.classList.remove("hide-item");
    homeNav.classList.add("view-home-nav");
  }
}
properties.addEventListener("click", () => {
  usernav.classList.add("hide-item");
  usernav.classList.remove("view-drop-down");
  homeNav.classList.remove("hide-item");
  homeNav.classList.add("view-home-nav");
});
homeanchor_link.forEach(anchor => {
  anchor.addEventListener("click", () => {
    let data = "for " + anchor.innerHTML.toLocaleLowerCase().trim();
    console.log(data);
    if (data == "for buy") {
      data = "for sale";
    }
    showAllProperties(data);
    if (window.outerWidth > 650) {
      return;
    }
    navigation.style = "display:none";
    homenav.style = "display:flex";
    setInterval(() => {
      console.log("checking");
      if (window.outerWidth > 650) {
        location.reload();
      }
    }, 1000);
  });
});
const searchInput = document.querySelector(".home-search-input");
searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchFunction(searchproperty);
    const searchTemp = document.querySelector(".search-temp");
    searchTemp.classList.remove("view-item");
    searchTemp.classList.add("hide-item");
  }
});
