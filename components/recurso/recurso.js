import { Dados } from "./tabs/Dados.js";
import { Alegacoes } from "./tabs/Alegacoes.js";
import { Questionamento } from "./tabs/Questionamento.js";
import { Parecer } from "./tabs/Parecer.js";
import { Observacoes } from "./tabs/Observacoes.js";
import { Topbar } from "../header/Topbar.js";
import { BtnAnalise } from "../buttons/BtnAnalise.js";
import { DadosRecurso } from "../dadosRecurso/DadosRecurso.js";
import { ANALISE_PADRAO } from "../../DATA/DATA-ANALISE.js";

let analiseAtual = JSON.parse(JSON.stringify(ANALISE_PADRAO));

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

    if (tab === "questionamento") {
      const bloco = document.querySelector(".bloco-questionamento");

      bloco.addEventListener("change", () => {
        analiseAtual.questionamento = capturarQuestionamento();
        console.log("Atualizado:", analiseAtual.questionamento);
      });
    }
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

function capturarQuestionamento() {
  return {
    infracaoCaracterizada: {
      motivo:
        document.querySelector('input[name="infracao_motivo"]:checked')
          ?.value || "",
      resposta:
        document.querySelector('input[name="infracao_resposta"]:checked')
          ?.value || "",
    },

    legitimidade: Array.from(
      document.querySelectorAll('input[name="legitimidade"]:checked'),
    ).map((el) => el.value),

    tempestividade:
      document.querySelector('input[name="tempestividade"]:checked')?.value ||
      "",

    artigo280: Array.from(
      document.querySelectorAll('input[name="artigo280"]:checked'),
    ).map((el) => el.value),

    veiculoCorresponde:
      document.querySelector('input[name="veiculo_corresponde"]:checked')
        ?.value || "",

    condutorIdentificado: {
      situacao:
        document.querySelector('input[name="condutor_situacao"]:checked')
          ?.value || "",
      complemento:
        document.querySelector('input[name="condutor_complemento"]:checked')
          ?.value || "",
    },
  };
}
