import { RECURSO_BASE } from "../../../DATA/DATA-RECURSO.js";

export function DadosRecurso() {
  const dR = RECURSO_BASE;
  return `
    <div id="tab-description">
          <h3>Recurso</h3>
          <div class="info-grid">
            <div>
              <label>Número do Recurso</label>
              <p>${dR.autoInfracao.numero}</p>
            </div>
            <div>
              <label>Jari nº/Protocolo</label>
              <p>${dR.autoInfracao.processamento}</p>
            </div>
            <div>
              <label>Data do protocolo</label>
              <p>16/06/2023</p>
            </div>
            <div>
              <label>Prazo limite para o recurso</label>
              <p>19/06/2023</p>
            </div>
            <div>
              <label>Analista</label>
              <p>—</p>
            </div>
          </div>
    `;
}
