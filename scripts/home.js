// import propeties from "./propeties";
const homenav = document.querySelector(".home-nav");
console.log(properteas);
const propertiesContainer = properties;
savesearch.addEventListener("click", () => {
  const propDetails = propertyDetails();
  const location = propDetails.locate.toLowerCase().trim();
  const type = propDetails.type.toLowerCase().trim();
  const maxprice = propDetails.defaultMaxprice;
  const minprice = Number(propDetails.defaultMinprice);

  properteas.map(prop => {
    if (prop.location === location) {
      const properties = prop.properties;
      rendersearchcont(location);
      properties.forEach(property => {
        if (
          property.propertyPrice >= minprice &&
          property.propertyPrice < maxprice &&
          property.type === type
        ) {
          rendersearch(property);
          toggleDropdowns("both");
          return;
        }
        console.log(property.propertyPrice);
        console.log(minprice);
        console.log(maxprice);
        console.log(type);
        console.log(property.type);
        console.log(property.propertyName);
      });
    }
  });
});
viewmobilenav(navigation, opennav, closenav);
opennav.addEventListener("click", () => (homenav.style = "display:none"));
closenav.addEventListener("click", () => (homenav.style = "display:flex"));
