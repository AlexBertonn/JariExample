import { Dados } from "./tabs/Dados.js";
import { Alegacoes } from "./tabs/Alegacoes.js";
import { Questionamento } from "./tabs/Questionamento.js";
import { Parecer } from "./tabs/Parecer.js";
import { Observacoes } from "./tabs/Observacoes.js";
import { Topbar } from "../header/Topbar.js";
import { BtnAnalise } from "../buttons/BtnAnalise.js";
import { DadosRecurso } from "../dadosRecurso/DadosRecurso.js";
import { ANALISE_PADRAO } from "../../DATA/DATA-ANALISE.js";

const STORAGE_KEY = "recursoAnalise";

function carregarAnalise() {
  const salvo = localStorage.getItem(STORAGE_KEY);
  return salvo ? JSON.parse(salvo) : JSON.parse(JSON.stringify(ANALISE_PADRAO));
}

function salvarAnalise() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(analiseAtual));
}

let analiseAtual = carregarAnalise();

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
      hidratarQuestionamento(analiseAtual.questionamento);

      const bloco = document.querySelector(".bloco-questionamento");

      bloco.addEventListener("change", () => {
        analiseAtual.questionamento = capturarQuestionamento();
        salvarAnalise();
      });
    }
    if (tab === "alegacao") {
      hidratarAlegacoes(analiseAtual.alegacao);

      const bloco = document.querySelector(".bloco-alegacoes");

      bloco.addEventListener("change", () => {
        analiseAtual.alegacao = capturarAlegacoes();
        salvarAnalise();
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

function marcarRadio(name, value) {
  if (!value) return;
  const el = document.querySelector(
    `input[type="radio"][name="${name}"][value="${value}"]`,
  );
  if (el) el.checked = true;
}

function marcarCheckboxes(name, values) {
  if (!Array.isArray(values)) return;
  values.forEach((v) => {
    const el = document.querySelector(
      `input[type="checkbox"][name="${name}"][value="${v}"]`,
    );
    if (el) el.checked = true;
  });
}

function hidratarQuestionamento(q) {
  if (!q) return;

  marcarRadio("infracao_motivo", q.infracaoCaracterizada?.motivo);
  marcarRadio("infracao_resposta", q.infracaoCaracterizada?.resposta);

  marcarCheckboxes("legitimidade", q.legitimidade);

  marcarRadio("tempestividade", q.tempestividade);

  marcarCheckboxes("artigo280", q.artigo280);

  marcarRadio("veiculo_corresponde", q.veiculoCorresponde);

  marcarRadio("condutor_situacao", q.condutorIdentificado?.situacao);
  marcarRadio("condutor_complemento", q.condutorIdentificado?.complemento);
}

function capturarAlegacoes() {
  return {
    comprovacao: Array.from(
      document.querySelectorAll('input[name="alegacao_comprovacao"]:checked'),
    ).map((el) => el.value),

    comprovacaoStatus:
      document.querySelector(
        'input[name="alegacao_comprovacao_status"]:checked',
      )?.value || "",

    lavratura: Array.from(
      document.querySelectorAll('input[name="alegacao_lavratura"]:checked'),
    ).map((el) => el.value),

    lavraturaStatus:
      document.querySelector('input[name="alegacao_lavratura_status"]:checked')
        ?.value || "",
  };
}

function hidratarAlegacoes(a) {
  if (!a) return;

  marcarCheckboxes("alegacao_comprovacao", a.comprovacao);
  marcarRadio("alegacao_comprovacao_status", a.comprovacaoStatus);

  marcarCheckboxes("alegacao_lavratura", a.lavratura);
  marcarRadio("alegacao_lavratura_status", a.lavraturaStatus);
}
