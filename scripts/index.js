// Sample data
const listings = [
  {
    id: 1,
    title: "Modern House in Downtown",
    price: 300000,
    image: "https://via.placeholder.com/200x150?text=House+1",
  },
  {
    id: 2,
    title: "Cozy Cottage in the Countryside",
    price: 150000,
    image: "https://via.placeholder.com/200x150?text=House+2",
  },
  {
    id: 3,
    title: "Luxury Apartment with City View",
    price: 500000,
    image: "https://via.placeholder.com/200x150?text=House+3",
  },
  {
    id: 4,
    title: "Spacious Family Home",
    price: 250000,
    image: "https://via.placeholder.com/200x150?text=House+4",
  },
];

// Function to display listings
function displayListings(filteredListings) {
  const listingsContainer = document.getElementById("listings");
  listingsContainer.innerHTML = "";

  filteredListings.forEach((listing) => {
    const listingDiv = document.createElement("div");
    listingDiv.className = "listing";
    listingDiv.innerHTML = `
            <img src="${listing.image}" alt="${listing.title}">
            <h2>${listing.title}</h2>
            <p>$${listing.price.toLocaleString()}</p>
        `;
    listingsContainer.appendChild(listingDiv);
  });
}

// Function to filter listings
function filterListings() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const minPrice = parseInt(document.getElementById("min-price").value) || 0;
  const maxPrice =
    parseInt(document.getElementById("max-price").value) || Infinity;

  const filteredListings = listings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchInput) &&
      listing.price >= minPrice &&
      listing.price <= maxPrice
  );

  displayListings(filteredListings);
}

// Display all listings initially
displayListings(listings);
