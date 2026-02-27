import { RECURSO_BASE } from "../../../DATA/DATA-RECURSO.js";

export function Table() {
  const dR = RECURSO_BASE;
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
            <td>Alterar capa para nome do recorrente</td>
          </tr>

          <tr class="linha-click">
            <td>252813</td>
            <td>230001081678202505</td>
            <td>AI06707605</td>
            <td>LQK5C21</td>
            <td>Fazer diligência confirmar placa.</td>
          </tr>
        </tbody>
      </table>
    `;
}
