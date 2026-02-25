export function Alegacoes() {
  return `
    <div class="bloco-alegacoes">

      <h3>Alegações</h3>

      <div class="question-box">
        <h3>Alegações comprovação</h3>

        <div class="question-grid">
          <div>
            <label><input type="checkbox" name="alegacao_comprovacao" value="irregularidade_sinalizacao"> Recorrente alega irregularidade na sinalização da via.</label>
            <label><input type="checkbox" name="alegacao_comprovacao" value="ocultacao_sinalizacao"> Recorrente alega ocultação da sinalização.</label>
            <label><input type="checkbox" name="alegacao_comprovacao" value="ocultacao_equipamento"> Recorrente alega ocultação do equipamento.</label>
            <label><input type="checkbox" name="alegacao_comprovacao" value="nao_transitou_local"> Recorrente alega não ter transitado pelo local na data dos fatos.</label>
            <label><input type="checkbox" name="alegacao_comprovacao" value="nega_bebida_alcoolica"> Recorrente nega a ingestão de bebida alcoólica.</label>
            <label><input type="checkbox" name="alegacao_comprovacao" value="estado_necessidade"> Recorrente alega que encontrava-se em estado de necessidade.</label>
            <label><input type="checkbox" name="alegacao_comprovacao" value="equipamento_nao_aferido"> Recorrente alega que o equipamento não encontrava-se devidamente aferido.</label>
          </div>

          <div>
            <label><input type="radio" name="alegacao_comprovacao_status" value="nao_aplicado" checked> Não aplicado</label>
          </div>
        </div>
      </div>

      <div class="question-box">
        <h3>Alegações de lavratura</h3>

        <div class="question-grid">
          <div>
            <label><input type="checkbox" name="alegacao_lavratura" value="irregularidade_lavratura_ait"> Recorrente alega irregularidade na lavratura do Auto de Infração de Trânsito.</label>
            <label><input type="checkbox" name="alegacao_lavratura" value="irregularidade_dados_veiculo"> Recorrente alega irregularidade na lavratura dos dados do veículo.</label>
            <label><input type="checkbox" name="alegacao_lavratura" value="irregularidade_dados_condutor"> Recorrente alega irregularidade na lavratura dos dados do condutor.</label>
            <label><input type="checkbox" name="alegacao_lavratura" value="irregularidade_local_infracao"> Recorrente alega irregularidade na lavratura dos dados do local da infração.</label>
            <label><input type="checkbox" name="alegacao_lavratura" value="irregularidade_tipificacao"> Recorrente alega irregularidade na lavratura da tipificação da infração.</label>
            <label><input type="checkbox" name="alegacao_lavratura" value="irregularidade_campo_observacoes"> Recorrente alega irregularidade na lavratura do campo observações.</label>
            <label><input type="checkbox" name="alegacao_lavratura" value="falta_assinatura_agente"> Recorrente alega falta de assinatura do agente.</label>
          </div>

          <div>
            <label><input type="radio" name="alegacao_lavratura_status" value="nao_aplicado" checked> Não aplicado</label>
          </div>
        </div>

      </div>

    </div>
  `;
}
