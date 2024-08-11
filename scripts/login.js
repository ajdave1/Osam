const create = document.getElementById("create");
const login = document.getElementById("login");

const toggle = (m) => {
  if (m === "login") {
    login.classList.add("view-item");
    create.classList.add("hide-item");
    login.classList.remove("hide-item");
    create.classList.remove("view-item");
  } else if (m === "create") {
    login.classList.add("hide-item");
    create.classList.remove("hide-item");
    create.classList.add("view-item");
    login.classList.remove("view-item");
  }
};
