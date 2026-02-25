// import { Recurso } from "./recurso/recurso.js";

// document.getElementById("app").innerHTML = Recurso();

import { Dados } from "./tabs/Dados.js";
import { Alegacoes } from "./tabs/Alegacoes.js";
import { Questionamento } from "./tabs/Questionamento.js";
import { Parecer } from "./tabs/Parecer.js";
import { Observacoes } from "./tabs/Observacoes.js";
import { Topbar } from "../header/Topbar.js";
import { BtnAnalise } from "../buttons/BtnAnalise.js";
import { DadosRecurso } from "../dadosRecurso/DadosRecurso.js";

export function Recurso() {
  return `
    ${Topbar()}
    
    <main class="content">
    <div class="recurso-page">
    ${BtnAnalise()}
    ${DadosRecurso()}

        <div class="tabs">
          <button data-tab="dados">Dados</button>
          <button data-tab="questionamento">Questionamento</button>
          <button data-tab="alegacao">Alegação</button>
          <button data-tab="parecer">Parecer</button>
          <button data-tab="observacoes">Observações</button>
          <button data-tab="anexo">Anexo</button>
          <button data-tab="movimentacao">Movimentação</button>
        </div>

        <div id="tab-container"></div>

      </div>
    </main>
  `;
}

function initTabs() {
  const container = document.getElementById("tab-container");

  const screens = {
    dados: Dados,
    questionamento: Questionamento,
    alegacao: Alegacoes,
    parecer: Parecer,
    observacoes: Observacoes,
  };

  function render(tab) {
    container.innerHTML = screens[tab]();
  }

  document.querySelectorAll(".tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".tabs button")
        .forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");

      render(button.dataset.tab);
    });
  });

  render("dados");
}

document.getElementById("app").innerHTML = Recurso();
initTabs();
