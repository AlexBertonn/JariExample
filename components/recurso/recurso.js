import { Dados } from "./tabs/Dados.js";
import { Alegacoes } from "./tabs/Alegacoes.js";
import { Questionamento } from "./tabs/Questionamento.js";
import { Parecer } from "./tabs/Parecer.js";
import { Observacoes } from "./tabs/Observacoes.js";
import { Topbar } from "../header/Topbar.js";
import { BtnAnalise } from "../buttons/BtnAnalise.js";
import { DadosRecurso } from "../dadosRecurso/DadosRecurso.js";
import { ANALISE_PADRAO } from "../../DATA/DATA-ANALISE.js";
import { RECURSO_BASE } from "../../../DATA/DATA-RECURSO.js";

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
    if (tab === "parecer") {
      hidratarParecer();
      const descricao = RECURSO_BASE?.autoInfracao?.infracao?.descricao ?? "";
      atualizarParecerDerivado(descricao);

      const justificativaEl = document.getElementById("parecer-justificativa");
      const codigoEl = document.getElementById("parecer-codigo");
      const votoEl = document.getElementById("parecer-voto");

      justificativaEl.addEventListener("input", () => {
        analiseAtual.parecer.justificativa = justificativaEl.value;
        salvarAnalise();
      });
      codigoEl.addEventListener("change", () => {
        analiseAtual.parecer.codigo = codigoEl.value;
        salvarAnalise();
      });
      votoEl.addEventListener("change", () => {
        analiseAtual.parecer.voto = votoEl.value;
        salvarAnalise();
      });
    }
    if (tab === "observacoes") {
      const textarea = document.getElementById("observacoes-texto");

      if (!textarea) return;
      textarea.value = analiseAtual.observacao || "";
      textarea.addEventListener("input", () => {
        analiseAtual.observacao = textarea.value;
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
  const motivoEl = document.querySelector(
    'input[name="infracao_motivo"]:checked',
  );
  const respostaEl = document.querySelector(
    'input[name="infracao_resposta"]:checked',
  );
  const tempestEl = document.querySelector(
    'input[name="tempestividade"]:checked',
  );
  const veicEl = document.querySelector(
    'input[name="veiculo_corresponde"]:checked',
  );
  const sitEl = document.querySelector(
    'input[name="condutor_situacao"]:checked',
  );
  const compEl = document.querySelector(
    'input[name="condutor_complemento"]:checked',
  );

  return {
    infracaoCaracterizada: {
      motivo: motivoEl
        ? { value: motivoEl.value, label: textoDoLabelDoInput(motivoEl) }
        : null,
      resposta: respostaEl
        ? { value: respostaEl.value, label: textoDoLabelDoInput(respostaEl) }
        : null,
    },

    legitimidade: Array.from(
      document.querySelectorAll('input[name="legitimidade"]:checked'),
    ).map((el) => ({ value: el.value, label: textoDoLabelDoInput(el) })),

    tempestividade: tempestEl
      ? { value: tempestEl.value, label: textoDoLabelDoInput(tempestEl) }
      : null,

    artigo280: Array.from(
      document.querySelectorAll('input[name="artigo280"]:checked'),
    ).map((el) => ({ value: el.value, label: textoDoLabelDoInput(el) })),

    veiculoCorresponde: veicEl
      ? { value: veicEl.value, label: textoDoLabelDoInput(veicEl) }
      : null,

    condutorIdentificado: {
      situacao: sitEl
        ? { value: sitEl.value, label: textoDoLabelDoInput(sitEl) }
        : null,
      complemento: compEl
        ? { value: compEl.value, label: textoDoLabelDoInput(compEl) }
        : null,
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

  marcarRadio("infracao_motivo", q.infracaoCaracterizada?.motivo?.value);
  marcarRadio("infracao_resposta", q.infracaoCaracterizada?.resposta?.value);

  marcarCheckboxes(
    "legitimidade",
    (q.legitimidade || []).map((x) => x.value),
  );

  marcarRadio("tempestividade", q.tempestividade?.value);

  marcarCheckboxes(
    "artigo280",
    (q.artigo280 || []).map((x) => x.value),
  );

  marcarRadio("veiculo_corresponde", q.veiculoCorresponde?.value);

  marcarRadio("condutor_situacao", q.condutorIdentificado?.situacao?.value);
  marcarRadio(
    "condutor_complemento",
    q.condutorIdentificado?.complemento?.value,
  );
}

function capturarAlegacoes() {
  const compStatusEl = document.querySelector(
    'input[name="alegacao_comprovacao_status"]:checked',
  );
  const lavStatusEl = document.querySelector(
    'input[name="alegacao_lavratura_status"]:checked',
  );

  return {
    comprovacao: Array.from(
      document.querySelectorAll('input[name="alegacao_comprovacao"]:checked'),
    ).map((el) => ({ value: el.value, label: textoDoLabelDoInput(el) })),

    comprovacaoStatus: compStatusEl
      ? { value: compStatusEl.value, label: textoDoLabelDoInput(compStatusEl) }
      : null,

    lavratura: Array.from(
      document.querySelectorAll('input[name="alegacao_lavratura"]:checked'),
    ).map((el) => ({ value: el.value, label: textoDoLabelDoInput(el) })),

    lavraturaStatus: lavStatusEl
      ? { value: lavStatusEl.value, label: textoDoLabelDoInput(lavStatusEl) }
      : null,
  };
}

function hidratarAlegacoes(a) {
  if (!a) return;

  marcarCheckboxes(
    "alegacao_comprovacao",
    (a.comprovacao || []).map((x) => x.value),
  );
  marcarRadio("alegacao_comprovacao_status", a.comprovacaoStatus?.value);

  marcarCheckboxes(
    "alegacao_lavratura",
    (a.lavratura || []).map((x) => x.value),
  );
  marcarRadio("alegacao_lavratura_status", a.lavraturaStatus?.value);
}

function hidratarParecer() {
  const justificativaEl = document.getElementById("parecer-justificativa");
  const codigoEl = document.getElementById("parecer-codigo");
  const votoEl = document.getElementById("parecer-voto");

  if (!justificativaEl || !codigoEl || !votoEl) return;

  justificativaEl.value = analiseAtual.parecer?.justificativa || "";
  codigoEl.value = analiseAtual.parecer?.codigo || "";
  votoEl.value = analiseAtual.parecer?.voto || "";
}

function hidratarObservacoes() {
  const textarea = document.getElementById("observacoes-texto");
  if (!textarea) return;
  textarea.value = analiseAtual.observacao || "";
}

function atualizarParecerDerivado() {
  const admEl = document.getElementById("parecer-admissibilidade");
  const alegEl = document.getElementById("parecer-alegacoes");

  if (!admEl || !alegEl) return;

  const descricaoInfracao =
    RECURSO_BASE?.autoInfracao?.infracao?.descricao ?? "";

  admEl.value = formatarQuestionamentoParaTexto(analiseAtual.questionamento);

  alegEl.value = formatarAlegacoesParaTexto(
    analiseAtual.alegacao,
    descricaoInfracao,
  );
}

function formatarQuestionamentoParaTexto(q) {
  if (!q) return "";

  const linhas = [];

  if (q.infracaoCaracterizada?.motivo?.label)
    linhas.push(q.infracaoCaracterizada.motivo.label);
  if (q.infracaoCaracterizada?.resposta?.label)
    linhas.push(q.infracaoCaracterizada.resposta.label);

  if (q.legitimidade?.length)
    linhas.push(q.legitimidade.map((x) => x.label).join(", "));

  if (q.tempestividade?.label) linhas.push(q.tempestividade.label);

  if (q.artigo280?.length)
    linhas.push(q.artigo280.map((x) => x.label).join(", "));

  if (q.veiculoCorresponde?.label) linhas.push(q.veiculoCorresponde.label);

  if (q.condutorIdentificado?.situacao?.label)
    linhas.push(q.condutorIdentificado.situacao.label);
  if (q.condutorIdentificado?.complemento?.label)
    linhas.push(q.condutorIdentificado.complemento.label);

  return linhas.join("\n");
}

function formatarAlegacoesParaTexto(a, descricaoInfracao = "") {
  const linhas = [];

  if (descricaoInfracao) {
    linhas.push(`A infração ocorreu por ${descricaoInfracao}`);
  }

  if (!a) return linhas.join("\n");

  if (a.comprovacao?.length)
    linhas.push(a.comprovacao.map((x) => x.label).join("\n"));

  if (a.comprovacaoStatus?.label) linhas.push(a.comprovacaoStatus.label);

  if (a.lavratura?.length)
    linhas.push(a.lavratura.map((x) => x.label).join("\n"));

  if (a.lavraturaStatus?.label) linhas.push(a.lavraturaStatus.label);

  return linhas.join("\n");
}

function obterTextoDoInput(name, value) {
  const input = document.querySelector(
    `input[name="${name}"][value="${value}"]`,
  );

  if (!input) return value;

  return input.parentElement.textContent.trim();
}

function textoDoLabelDoInput(inputEl) {
  const label = inputEl.closest("label");
  if (!label) return "";
  return label.textContent.replace(/\s+/g, " ").trim();
}
