const homenav = document.querySelector(".home-nav");
const homeNav = document.querySelector(".home-navigation-list");
const usernav = document.querySelector(".user-navigation");
const toggleUserNav = document.querySelector(".user-profile-image");
const homeanchor = document.querySelectorAll("#home-anchor");
const propertiesContainer = properties;
savesearch.addEventListener("click", () => {
  let properties = [];
  const propDetails = propertyDetails();
  const location = propDetails.locate.toLowerCase().trim();
  const type = propDetails.type.toLowerCase().trim();
  const maxprice = propDetails.defaultMaxprice;
  const minprice = Number(propDetails.defaultMinprice);
  let searching = propDetails.locate;
  proper.map(prop => {
    const location =
      prop.location.toLocaleLowerCase().trim() +
      " " +
      prop.state.toLocaleLowerCase().trim();
    const found = location.includes(searching);
    if (found) {
      properties.push(prop);
    }
  });
  properties.forEach(el => {
    if (
      el.type === type &&
      el.propertyPrice >= minprice &&
      el.propertyPrice <= maxprice
    ) {
      searchproperty();
    }
  });
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
homeanchor.forEach(anchor => {
  anchor.addEventListener("click", () => {
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
