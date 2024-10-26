export function emptySearch(location, head, message) {
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
export function propertyDetails() {
  const viewType = document.querySelector(".type-value");
  let defaultMinprice = 200000;
  let defaultMaxprice = 10000000;
  const searchInput = document.querySelector(".home-search-input");
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


export function rendersearch(property, imgs, uid) {
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
export function rendersearchcont(location) {
  let container = document.querySelector(".properties");
  container.innerHTML = `
    <div class="location-image">
                      <img src="./property-location/${location}.png">
                  </div>
                  <div class="properties-at-location">
                    
                  </div> 
    `;
}

export function imageScroller() {
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
export function toggleDropdowns(mes) {
  const type_drop_down = document.querySelector(".type-drop-down");
  const price_drop_down = document.querySelector(".price-cont");
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
// export function searchFunction() {
//   const searchInput = document.querySelector(".home-search-input");
//   if (searchInput.value.trim() === "") {
//     return;
//   }
//   const propDetails = propertyDetails();
//   const location = propDetails.locate.toLowerCase().trim();
//   const head = "There is no property available at";
//   const mess = "Contact our suppport for additional information";
//   emptySearch(location, head, mess);
//   searchproperty();
// }
