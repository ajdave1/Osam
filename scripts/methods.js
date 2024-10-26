import { popularLocations, proper } from "./propeties.js";
import {
  emptySearch,
  propertyDetails,
  rendersearch,
  rendersearchcont,
  imageScroller,
  toggleDropdowns,
} from "./functions.js";

export const methods = {
  renderP_locations: () => {
    const container = document.querySelector(".locations");
    popularLocations.forEach(location => {
      container.innerHTML += `
      <div class="card">
                          <div class="card-image">
                              <img src="${location.image}" alt="${location.name} image">
      
                          </div>
                          <div class="card-name">
                              <a href="home.html" id="link-to-def">${location.name}</a>
                          </div>
                      </div>
      
      `;
    });
  },

  viewmobilenav: (nav, btnO, btnC) => {
    btnO.addEventListener("click", () => {
      nav.style = "display:block";
    });
    btnC.addEventListener("click", () => {
      nav.style = "display:none";
    });
  },
  redirect: () => {
    const links = document.querySelectorAll("#link-to-def");
    links.forEach(link => {
      link.addEventListener("click", el => {
        let data = JSON.stringify(link.innerHTML);
        console.log(data);
        localStorage.clear();
        localStorage.setItem("location", data);
      });
    });
  },
  suggest: () => {
    const searchInput = document.querySelector(".home-search-input");
    const searchTemp = document.querySelector(".search-temp");
    const searchUL = document.querySelector(".search-temp ul");
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
          methods.searchproperty(btn.innerHTML);
          searchInput.value = btn.innerHTML;
          searchTemp.classList.remove("view-item");
          searchTemp.classList.add("hide-item");
        });
      });
    });
  },

  searchproperty: opt => {
    const propDetails = propertyDetails();
    let location = propDetails.locate.toLowerCase().trim();
    if (opt) {
      location = opt;
    }
    let properties = [];
    proper.forEach(el => {
      const subLocation = el.location.toLocaleLowerCase().trim();
      const state = el.state.toLocaleLowerCase().trim();
      let test = subLocation + " " + state;
      const found = test.includes(location);
      if (found) {
        rendersearchcont();
        properties.push(el);
      }
    });

    properties.forEach(el => {
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
  },
  searchFunction: search => {
    const searchInput = document.querySelector(".home-search-input");
    if (searchInput.value.trim() === "") {
      return;
    }
    const propDetails = propertyDetails();
    const location = propDetails.locate.toLowerCase().trim();
    const head = "There is no property available at";
    const mess = "Contact our suppport for additional information";
    emptySearch(location, head, mess);
    search();
  },

  select: () => {
    const getPrice = document.getElementById("get-price");
    const viewPricedrop = document.getElementById("view-price-dd");
    const viewTypedrop = document.getElementById("view-type-dd");
    const properties = document.querySelector(".properties");
    const getType = document.getElementById("get-property-type");
    const option = document.getElementsByName("selected");
    const viewType = document.querySelector(".type-value");
    const minPrice = document.getElementById("min-p");
    const maxPrice = document.getElementById("max-p");
    const viewPrice = document.querySelector(".price-value");
    let defaultMinprice = 200000;
    let defaultMaxprice = 10000000;
    getType.addEventListener("click", () => {
      const selectedradio = Array.prototype.find.call(option, selected => {
        return selected.checked;
      });
      const selectedValue = selectedradio;
      viewType.innerHTML = "For" + " " + selectedValue.value;
      toggleDropdowns("both");
    });
    properties.addEventListener("click", () => {
      const searchTemp = document.querySelector(".search-temp");
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
  },
  showAllProperties: type => {
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
  },
};
