import { RECURSO_BASE } from "../../../DATA/DATA-RECURSO.js";

export function Table() {
  const dR = RECURSO_BASE;

  const analiseSalva = JSON.parse(localStorage.getItem("recursoAnalise")) || {};

  const observacaoAnalista = analiseSalva.observacao?.analista || "";

  const observacaoRevisor = analiseSalva.observacao?.revisor || "";

  return `
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Jari nº/Protocolo</th>
            <th>Auto de infração</th>
            <th>Placa</th>
            <th>Observações</th>
          </tr>
        </thead>

        <tbody>
          <tr class="linha-click">
            <td>252813</td>
            <td>${dR.autoInfracao.processamento}</td>
            <td>${dR.autoInfracao.numero}</td>
            <td>${dR.veiculo.placa}</td>
            <td>
              ${observacaoAnalista}
              ${observacaoRevisor ? "<br><strong>Revisor:</strong> " + observacaoRevisor : ""}
            </td>
          </tr>
        </tbody>
      </table>
  `;
}
