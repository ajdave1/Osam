const viewType = document.querySelector(".type-value");
const viewPrice = document.querySelector(".price-value");
const option = document.getElementsByName("selected");
const getType = document.getElementById("get-property-type");
const type_drop_down = document.querySelector(".type-drop-down");
const price_drop_down = document.querySelector(".price-cont");
const viewPricedrop = document.getElementById("view-price-dd");
const viewTypedrop = document.getElementById("view-type-dd");
const searchInput = document.querySelector(".home-search-input");
//break-line;
const savesearch = document.querySelector(".save-search");
const minPrice = document.getElementById("min-p");
const maxPrice = document.getElementById("max-p");
const getPrice = document.getElementById("get-price");
const properties = document.querySelector(".properties");
const opennav = document.getElementById("open-nav");
const closenav = document.getElementById("close-nav");
const navigation = document.querySelector(".navigation");
const notification = document.querySelector(".notification");
const note = document.querySelector(".notification-message");

let defaultMinprice = 200000;
let defaultMaxprice = 10000000;

//SPOT
getType.addEventListener("click", () => {
  const selectedradio = Array.prototype.find.call(option, selected => {
    return selected.checked;
  });
  const selectedValue = selectedradio;
  viewType.innerHTML = "For" + " " + selectedValue.value;
  toggleDropdowns("both");
});

function toggleDropdowns(mes) {
  if (mes === "Type") {
    type_drop_down.classList.add("view-drop-down");
    type_drop_down.classList.remove("hide-item");
    price_drop_down.classList.remove("view-item");
    price_drop_down.classList.add("hide-item");
  } else if (mes === "Price") {
    type_drop_down.classList.remove("view-drop-down");
    type_drop_down.classList.add("hide-item");
    price_drop_down.classList.add("view-item");
    price_drop_down.classList.remove("hide-item");
  } else if (mes === "both") {
    type_drop_down.classList.remove("view-drop-down");
    type_drop_down.classList.add("hide-item");
    price_drop_down.classList.add("hide-item");
    price_drop_down.classList.remove("view-item");
  }
}
viewTypedrop.addEventListener("click", () => toggleDropdowns("Type"));
viewPricedrop.addEventListener("click", () => toggleDropdowns("Price"));
//break-line
getPrice.addEventListener("click", () => {
  if (minPrice.value < 200000) {
    window.alert("Please enter any price about 200,000");
    return;
  } else if (minPrice.value > maxPrice.value) {
    window.alert("Minimum price can't be greater than Maximum price");
    return;
  }
  defaultMinprice = minPrice.value;
  defaultMaxprice = maxPrice.value;
  viewPrice.innerHTML = "Saved";
  toggleDropdowns("both");
});

function propertyDetails() {
  let locate = searchInput.value;
  locate.toLowerCase();
  const type = viewType.innerHTML;

  const propertyDetails = {
    locate,
    type,
    defaultMaxprice: Number(defaultMaxprice),
    defaultMinprice: Number(defaultMinprice),
  };
  return propertyDetails;
}

function handleKey(event) {
  if (event.key === "Enter") {
    if (searchInput.value.trim() === "") {
      return;
    }
    const propDetails = propertyDetails();
    const location = propDetails.locate.toLowerCase().trim();
    const head = "There is no property available at";
    const mess = "Contact our suppport for additional information";
    emptySearch(location, head, mess);
    searchproperty();
  }
}

function searchproperty() {
  const propDetails = propertyDetails();
  const location = propDetails.locate.toLowerCase().trim();
  properteas.forEach(property => {
    if (property.location === location) {
      const LocationProperties = property.properties;
      rendersearchcont(location);
      LocationProperties.forEach(prop => {
        rendersearch(prop);
      });
    }
  });
}

//break-line
function rendersearchcont(location) {
  let container = document.querySelector(".properties");
  container.innerHTML = `
  <div class="location-image">
                    <img src="./property-location/${location}.png">
                </div>
                <div class="properties-at-location">
                  
                </div> 
  `;
}

function rendersearch(prop) {
  document.querySelector(".properties-at-location").innerHTML += `
    <div class="property-card">
                        <div class="bx bxs-heart" id="save-property"></div>
                        <div class="property-image">
                            <img src="./properties/${prop.propertyImage}">
                        </div>
                        <div class="property-bottom">
                            <div>
                                <h4>${prop.propertyName}</h4>
                                <p class="type">${prop.type}</p>
                            </div>
                            <p><span id="currency">NGN</span>${prop.propertyPrice}</p>
                            <p><i class='bx bxs-map-pin bx-burst'></i> ${prop.location}</p>
                            <div class="contact">
                                <a href="https://wa.me/+2347031679246" class="callus"> <i
                                        class='bx bxl-whatsapp '></i> &nbsp;</a>
                                <span>&nbsp; | &nbsp; </span> <a href="mailto:sam@osam.gmail.com"
                                   class="bx bx-envelope emailus"></a>
                            </div>
                        </div>
                    </div>
  
  `;
}
function emptySearch(location, head, message) {
  let container = document.querySelector(".properties");
  container.innerHTML = `
                <div class="defaultEmpty">
                    <div class="defaultEmpty-image">
                        <img src="./assets/illustration-empty-state-fullscreen.png">
                    </div>

                    <div class="defaultEmpty-text">
                        <div>
                            <h1>OOPS</h1>
                            <h2><i class='bx bxs-key bx-spin'></i> ${head} ${location}</h2>
                            <p>${message}</p>
                        </div>
                    </div>
                </div>
  `;
}

function viewmobilenav(nav, btnO, btnC) {
  btnO.addEventListener("click", () => {
    nav.style = "display:block";
  });
  btnC.addEventListener("click", () => {
    nav.style = "display:none";
  });
}
function showAllProperties(type) {
  const arr = [];
  properteas.forEach(prop => {
    const properties = prop.properties;
    properties.map(prop => {
      if (prop.type === type) {
        arr.push(prop);
      }
    });

    console.log(arr);
    document.querySelector(
      ".properties"
    ).innerHTML = ` <div class="properties-at-location">
  </div>`;
    arr.forEach(prop => {
      let container = document.querySelector(".properties-at-location");
      container.classList.add(".allproperties-style");
      container.style = "width:95%; justify-content: center; ";
      const property = prop;
      console.log(property);
      container.innerHTML += `
          <div class="property-card">
                              <div class="bx bxs-heart" id="save-property"></div>
                              <div class="property-image">
                                  <img src="./properties/${property.propertyImage}">
                              </div>
                              <div class="property-bottom">
                                  <div>
                                      <h4>${property.propertyName}</h4>
                                      <p class="type">${property.type}</p>
                                  </div>
                                  <p><span id="currency">NGN</span>${property.propertyPrice}</p>
                                  <p><i class='bx bxs-map-pin bx-burst'></i> ${property.location}</p>
                                  <div class="contact">
                                      <a href="https://wa.me/+2347031679246" class="callus"> <i
                                              class='bx bxl-whatsapp '></i> &nbsp;</a>
                                      <span>&nbsp; | &nbsp; </span> <a href="mailto:sam@osam.gmail.com"
                                         class="bx bx-envelope emailus"></a>
                                  </div>
                              </div>
                          </div>
                           </div>
        `;
    });
  });
}

function notify(message) {
  note.innerHTML = message;
  notification.classList.remove("hide-notification");
  notification.classList.add("view-notification");
  setTimeout(() => {
    note.innerHTML = "";
    notification.classList.add("hide-notification");
    notification.classList.remove("view-notification");
  }, 3000);
}
// notify("This is notification");
