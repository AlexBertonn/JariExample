import { Table } from "./components/table/table.js";
import { SideBar } from "./components/sidebar/sidebar.js";
import { Topbar } from "./components/header/Topbar.js";
import { DadosBusca } from "./components/dadosBusca/dadosBusca.js";

document.getElementById("sideBar-container").innerHTML = SideBar();
document.getElementById("header-container").innerHTML = Topbar();
document.getElementById("dados-busca").innerHTML = DadosBusca();

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
