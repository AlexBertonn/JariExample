export function DadosPrincipais() {
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
            <option>A</option>
            <option>AI</option>
            <option>AC</option>
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
            <option>50</option>
            <option>100</option>
          </select>
        </div>

        <div class="field">
          <label>Diligência aberta</label>
          <select>
            <option></option>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div>

      <div class="analista-row">
        <input type="text" placeholder="Analista" />

        <div class="checks">

      <label class="check-item">
        <input type="checkbox" class="check"/>
        Pendentes de análise
      </label>

      <label class="check-item">
        <input type="checkbox" class="check"/>
        Pendente de aprovação
      </label>

      <label class="check-item">
        <input type="checkbox" class="check"/>
        Observações
      </label>
    </div>
</div>
      `;
}
