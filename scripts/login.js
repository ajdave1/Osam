const create = document.getElementById("create");
const login = document.getElementById("login");
const admin = document.getElementById("admin");
const tocreate = document.querySelector(".to-create");
const tologin = document.querySelector(".to-login");
const toAdmin = document.querySelectorAll(".admin-button");
const toggle = m => {
  if (m === "login") {
    login.classList.add("view-item");
    create.classList.add("hide-item");
    login.classList.remove("hide-item");
    create.classList.remove("view-item");
    admin.classList.remove("view-item");
    admin.classList.add("hide-item");
  } else if (m === "create") {
    login.classList.add("hide-item");
    create.classList.remove("hide-item");
    create.classList.add("view-item");
    login.classList.remove("view-item");
    admin.classList.remove("view-item");
    admin.classList.add("hide-item");
  } else if (m === "admin") {
    admin.classList.add("view-item");
    admin.classList.remove("hide-item");
    create.classList.add("hide-item");
    create.classList.remove("view-item");
    login.classList.add("hide-item");
    login.classList.remove("view-item");
  }
};
toAdmin.forEach(button => {
  button.addEventListener("click", () => {
    console.log("clicked");
    toggle("admin");
  });
});

tocreate.addEventListener("click", () => {
  toggle("create");
});
tologin.addEventListener("click", () => {
  toggle("login");
});
