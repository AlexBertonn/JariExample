export function Parecer() {
  return `
    <div class="bloco-parecer">
      <h3>Parecer</h3>

      <div class="form-section">
        <label>Admissibilidade</label>
        <textarea id="parecer-admissibilidade" readonly placeholder="Preenchido automaticamente a partir do Questionamento"></textarea>

        <label>Alegações</label>
        <textarea id="parecer-alegacoes" readonly placeholder="Preenchido automaticamente a partir das Alegações"></textarea>

        <label>Parecer</label>
        <select id="parecer-codigo" class="select-pequeno">
          <option value="">Selecione...</option>
          <option value="520">Não comprova - 520</option>
          <option value="563">Lavrado corretamente - 563</option>
          <option value="566">Devidamente caracterizada - 566</option>
          <option value="outros">Outros</option>
        </select>

        
        <textarea id="parecer-justificativa" placeholder="Digite a justificativa..."></textarea>

        <label>Voto</label>
        <select id="parecer-voto" class="select-pequeno">
          <option value="">Selecione...</option>
          <option value="deferimento">Deferimento</option>
          <option value="indeferimento">Indeferimento</option>
        </select>
      </div>
    </div>
  `;
}
