export function Alegacoes() {
  return `
    <div class="bloco-questionamento">

      <h3>Alegações</h3>

      <div class="question-box">
        <h3>Alegações comprovação</h3>

        <div class="question-grid">
          <div>
            <label><input type="checkbox" name="caracterizada_motivo"> Recorrente alega irregularidade na sinalização da via.</label>
            <label><input type="checkbox" name="caracterizada_motivo"> Recorrente alega ocultação da sinalização.</label>
            <label><input type="checkbox" name="caracterizada_motivo"> Recorrente alega ocultação do equipamento.</label>
            <label><input type="checkbox" name="caracterizada_motivo"> Recorrente alega não ter transitado pelo local na data dos fatos.</label>
            <label><input type="checkbox" name="caracterizada_motivo"> Recorrente alega nega a ingestão de bebida alcoólica.</label>
            <label><input type="checkbox" name="caracterizada_motivo"> Recorrente alega que encontrava-se em estado de necessidade.</label>
            <label><input type="checkbox" name="caracterizada_motivo"> Recorrente alega que o equipamento não encontrava-se devidamente aferido.</label>
          </div>

          <div>
            <label><input type="radio" name="caracterizada"> Não aplicado</label>
          </div>
        </div>
      </div>

      <div class="question-box">
        <h3>Alegações de lavratura</h3>

        <div class="question-grid">
          <div>
            <label><input type="checkbox" name="legitimidade_status">  Recorrente alega irregularidade na lavratura do Auto de Infração de Trânsito.</label>
            <label><input type="checkbox" name="legitimidade_status">  Recorrente alega irregularidade na lavratura dos dados do veículo presente no Auto de Infração de Trânsito.</label>
            <label><input type="checkbox" name="legitimidade_status">  Recorrente alega irregularidade na lavratura dos dados do condutor presente no Auto de Infração de Trânsito.</label>
            <label><input type="checkbox" name="legitimidade_status">  Recorrente alega irregularidade na lavratura dos dados do local da infração presente no Auto de Infração de Trânsito.</label>
            <label><input type="checkbox" name="legitimidade_status">  Recorrente alega irregularidade na lavratura da tipificação da infração presente no Auto de Infração de Trânsito.</label>
            <label><input type="checkbox" name="legitimidade_status">  Recorrente alega irregularidade na lavratura do campo observações presente no Auto de Infração de Trânsito.</label>
            <label><input type="checkbox" name="legitimidade_status">  Recorrente alega falta de assinatura do agente no Auto de Infração de Trânsito.</label>
          </div>

          <div>
            <label><input type="radio" name="legitimidade_status"> Não aplicado</label>
          </div>
        </div>

      </div>

      </div>

    </div>
    `;
}
