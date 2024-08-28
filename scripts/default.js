const initialdata = JSON.parse(localStorage.getItem("toInitial"));
const linkdata = JSON.parse(localStorage.getItem("location"));
const searchCont = document.querySelector(".home-search-input");

console.log(linkdata, initialdata);
if (linkdata) {
  searchCont.value = linkdata;
} else {
  console.log("nO");
}
if (initialdata) {
  showAllProperties("for rent");
  localStorage.clear();
}
