const searchInput = document.querySelector(".home-search-input");
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
