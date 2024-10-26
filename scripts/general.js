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
const navigation = document.querySelector(".navigation");
const notification = document.querySelector(".notification");
const note = document.querySelector(".notification-message");
const searchButton = document.getElementById("search-button");
const searchTemp = document.querySelector(".search-temp");
const searchUL = document.querySelector(".search-temp ul");
let defaultMinprice = 200000;
let defaultMaxprice = 10000000;

//SPOT

function select() {
  getType.addEventListener("click", () => {
    const selectedradio = Array.prototype.find.call(option, selected => {
      return selected.checked;
    });
    const selectedValue = selectedradio;
    viewType.innerHTML = "For" + " " + selectedValue.value;
    toggleDropdowns("both");
  });
  properties.addEventListener("click", () => {
    toggleDropdowns("both");
    searchTemp.classList.add("hide-item");
    searchTemp.classList.remove("view-item");
  });
  viewTypedrop.addEventListener("click", () => toggleDropdowns("Type"));
  viewPricedrop.addEventListener("click", () => toggleDropdowns("Price"));
  // TODO;
  getPrice.addEventListener("click", () => {
    if (minPrice.value < 200000) {
      window.alert("Please enter any price above 200,000");
      return;
    }
    defaultMinprice = minPrice.value;
    defaultMaxprice = maxPrice.value;
    viewPrice.innerHTML = "Saved";
    toggleDropdowns("both");
  });
}
select();

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

//break-line FUNCTIONs
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

function suggest() {
  searchInput.addEventListener("keydown", event => {
    searchTemp.classList.add("view-item");
    searchTemp.classList.remove("hide-item");
    const searching = searchInput.value.toLowerCase();
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
          <li><a id="home-search-buttons" >${local}</a></li>
       `;
    });

    let homeSearchbtn = document.querySelectorAll("#home-search-buttons");
    homeSearchbtn.forEach(btn => {
      btn.addEventListener("click", () => {
        searchproperty(btn.innerHTML);
        searchInput.value = btn.innerHTML;
        searchTemp.classList.remove("view-item");
        searchTemp.classList.add("hide-item");
      });
    });

    if (event.key === "Enter") {
      searchFunction();
      searchTemp.classList.remove("view-item");
      searchTemp.classList.add("hide-item");
    }
  });
}
suggest();
searchButton.addEventListener("click", () => {
  searchFunction();
});

function searchFunction() {
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

function searchproperty(opt) {
  const propDetails = propertyDetails();
  let location = propDetails.locate.toLowerCase().trim();
  if (opt) {
    location = opt;
  }
  let p = [];
  proper.forEach(el => {
    const subLocation = el.location.toLocaleLowerCase().trim();
    const state = el.state.toLocaleLowerCase().trim();
    let test = subLocation + " " + state;

    const found = test.includes(location);

    if (found) {
      rendersearchcont();
      p.push(el);
    }
  });

  p.forEach(el => {
    document.querySelector(
      ".location-image"
    ).innerHTML = ` <img src="./property-location/${el.state.toLocaleLowerCase()}.png">`;

    const images = el.propertyImage;
    let imagesString = "";
    images.forEach(image => {
      imagesString += `<img src ="${image}">`;
    });
    rendersearch(el, imagesString, el.uid);
  });
  imageScroller();
}

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

function rendersearch(property, imgs, uid) {
  document.querySelector(".properties-at-location").innerHTML += `
   
                     
                    <div class="property-card">
                        <div class="bx bxs-heart" id="save-property"></div>
                        <div class="property-image" data-uid = "${uid}">
                           ${imgs}
                        </div>
                        <div class="property-image-toggler" >
                            <button class="bx bx-chevron-left" id="property-image-left" data-uid = "${uid}"></button>
                            <button class="bx bx-chevron-right" id="property-image-right" data-uid = "${uid}"></button>
                        </div>
                        <div class="property-bottom">
                            <div>
                                <h4>${property.propertyName}</h4>
                                <p class="type">${property.type}</p>
                            </div>
                            <p><span id="currency">NGN</span>${property.propertyPrice}</p>
                            <p><i class='bx bxs-map-pin bx-burst'></i> ${property.location}</p>
                            <div class="contact">
                                <a href="https://wa.me/+2347031679246" class="callus"> <i class='bx bxl-whatsapp '></i>
                                    &nbsp;</a>
                                <span>&nbsp; | &nbsp; </span> <a href="mailto:sam@osam.gmail.com"
                                    class="bx bx-envelope emailus"></a>
                            </div>
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
  document.querySelector(".properties").innerHTML = `
  <div class="properties-at-location" style="width:100%;"> </div>
  `;
  proper.forEach(el => {
    if (type === el.type) {
      console.log(el);
      const images = el.propertyImage;
      let imagesString = "";
      images.forEach(image => {
        imagesString += `<img src ="${image}">`;
      });
      rendersearch(el, imagesString, el.uid);
    }
  });
  imageScroller();
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
function imageScroller() {
  const propertyImage = document.querySelectorAll(".property-image");
  const propertyImage_left = document.querySelectorAll("#property-image-left");
  const propertyImage_right = document.querySelectorAll(
    "#property-image-right"
  );

  propertyImage_right.forEach(btn => {
    btn.addEventListener("click", () => {
      let id = btn.dataset.uid;
      propertyImage.forEach(el => {
        if (el.dataset.uid == id) {
          let width = el.offsetWidth;
          el.scrollLeft += width;
        }
      });
    });
  });
  propertyImage_left.forEach(btn => {
    btn.addEventListener("click", () => {
      let id = btn.dataset.uid;
      propertyImage.forEach(el => {
        if (el.dataset.uid == id) {
          let width = el.offsetWidth;
          el.scrollLeft -= width;
        }
      });
    });
  });
}
