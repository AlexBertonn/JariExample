export function Recurso() {
  return `
    <div class="recurso-page">

  <!-- AÇÕES TOPO -->
  <div class="top-actions">
    <button>F7-Novo</button>
    <button>F12-Gravar</button>
    <button>F8-Abrir</button>
    <button>Buscar Recurso</button>
    <button class="primary">Visualizar Documentos</button>
  </div>

  <!-- ABAS -->
  <div class="tabs">
    <span>Dados Principais</span>
    <span>Questionamentos</span>
    <span class="active">Parecer</span>
    <span>Anexo</span>
    <span>Movimentação</span>
  </div>

  <!-- RECURSO -->
  <h3>Recurso</h3>

  <div class="info-grid">
    <div>
      <label>Número do Recurso</label>
      <p>174588</p>
    </div>

    <div>
      <label>Jari nº/Protocolo</label>
      <p>2300010120416202341</p>
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

  <!-- PARECER -->
  <h3>Parecer</h3>

  <div class="form-section">
    <label>Admissibilidade</label>
    <textarea></textarea>

    <label>Justificativa</label>
    <textarea></textarea>

    <label>Motivo</label>
    <textarea></textarea>

    <!-- OBSERVAÇÕES -->
    <label>Observações</label>
    <textarea>
Alegação referente à sinalização, rever parecer.
    </textarea>
  </div>

</div>

    `;
}
