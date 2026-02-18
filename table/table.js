export function Table() {
  return `
  <div class="tabela-dados">
      <div class="form-grid">
        <div class="field">
          <label>Jari nº/Protocolo</label>
          <input type="text" />
        </div>

        <div class="field">
          <label>Código</label>
          <input type="text" />
        </div>

        <div class="field">
          <label>Série</label>
          <select>
            <option></option>
          </select>
        </div>

        <div class="field">
          <label>Número do Auto</label>
          <input type="text" />
        </div>

        <div class="field">
          <label>Placa</label>
          <input type="text" />
        </div>

        <div class="field">
          <label>Quant. resultado</label>
          <select>
            <option>30</option>
          </select>
        </div>

        <div class="field">
          <label>Diligência aberta</label>
          <select>
            <option></option>
          </select>
        </div>
      </div>

      <div class="analista-row">
        <input type="text" placeholder="Analista" />

        <div class="checks">
          <label><input type="checkbox" /> Pendentes de análise</label>
          <label><input type="checkbox" /> Pendente de aprovação</label>
          <label><input type="checkbox" /> Observações</label>
        </div>
      </div>

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
          <tr>
            <td>252813</td>
            <td>230001081678202505</td>
            <td>AI06707605</td>
            <td>LQK5C21</td>
            <td>Alterar capa para nome do recorrente</td>
          </tr>
          <tr>
            <td>252813</td>
            <td>230001081678202505</td>
            <td>AI06707605</td>
            <td>LQK5C21</td>
            <td>Fazer diligência confirmar placa.</td>
          </tr>
        </tbody>
      </table>
    </div>
    `;
}
