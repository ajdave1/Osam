const initialdata = localStorage.getItem("toInitial");
const linkdata = JSON.parse(localStorage.getItem("location"));
const searchCont = document.querySelector(".home-search-input");

console.log(linkdata, initialdata);
if (linkdata) {
  searchCont.value = linkdata;
  searchFunction();
}
if (initialdata) {
  showAllProperties(initialdata);
  localStorage.clear();
}

try {
  fetch("http://127.0.0.1:5000/testing", {
    method: "POST",
  })
    .then(data => data.json())
    .then(data => {
      console.log(data);
    });
} catch {
  console.log("error ");
}
