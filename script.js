import { Table } from "./table/table.js";
import { SideBar } from "./sidebar/sidebar.js";
import { Header } from "./nav/header.js";

document.getElementById("table-container").innerHTML = Table();
document.getElementById("sideBar-container").innerHTML = SideBar();
document.getElementById("header-container").innerHTML = Header();

document.querySelectorAll(".linha-click").forEach((linha) => {
  linha.addEventListener("click", () => {
    window.open("recurso.html", "_blank");
  });
});
