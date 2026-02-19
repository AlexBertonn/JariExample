import { Table } from "./components/table/table.js";
import { SideBar } from "./components/sidebar/sidebar.js";
import { Header } from "./components/nav/header.js";
import { DadosPrincipais } from "./components/dadosPrincipais/dadosPrincipais.js";

document.getElementById("sideBar-container").innerHTML = SideBar();
document.getElementById("header-container").innerHTML = Header();
document.getElementById("dados-principais").innerHTML = DadosPrincipais();

function mostrarTabela() {
  const container = document.getElementById("table-container");
  container.innerHTML = Table();
}

window.mostrarTabela = mostrarTabela;

document.addEventListener("click", (e) => {
  const linha = e.target.closest(".linha-click");

  if (linha) {
    window.open("recurso.html", "_blank");
  }
});
