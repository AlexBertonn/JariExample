export function Questionamento() {
  return `
    <div class="bloco-questionamento">

      <h3>Questionamentos</h3>

      <div class="question-box">
        <h3>A infração encontra-se devidamente caracterizada.</h3>

        <div class="question-grid">
          <div>
            <label><input type="radio" name="infracao_motivo" value="balanca_excesso_peso"> Balança excesso de peso.</label>
            <label><input type="radio" name="infracao_motivo" value="radar"> Radar.</label>
            <label><input type="radio" name="infracao_motivo" value="auto_extraviado"> Auto de infração extraviado.</label>
          </div>

          <div>
            <label><input type="radio" name="infracao_resposta" value="nao"> Não.</label>
            <label><input type="radio" name="infracao_resposta" value="sim"> Sim.</label>
            <label><input type="radio" name="infracao_resposta" value="nao_aplicado"> Não aplicado</label>
          </div>
        </div>
      </div>

      <div class="question-box">
        <h3>O recorrente comprova ser parte legítima?</h3>

        <div class="question-grid">
          <div>
            <label><input type="checkbox" name="legitimidade" value="nao_anexa_termo_posse"> O recorrente não anexa termo de posse.</label>
            <label><input type="checkbox" name="legitimidade" value="nao_comprova_proprietario"> O recorrente não comprova ser o proprietário.</label>
            <label><input type="checkbox" name="legitimidade" value="nao_assinou_procuracao"> O recorrente não assinou a procuração.</label>
            <label><input type="checkbox" name="legitimidade" value="comprova_parte_legitima"> O recorrente comprova ser parte legítima.</label>
            <label><input type="checkbox" name="legitimidade" value="falta_procuracao"> Falta procuração.</label>
            <label><input type="checkbox" name="legitimidade" value="procurador_sem_oab"> Procurador não inscrito na OAB.</label>
            <label><input type="checkbox" name="legitimidade" value="nao_apresentou_contrato_social"> O recorrente não apresentou contrato social.</label>
            <label><input type="checkbox" name="legitimidade" value="responsabilidade_proprietario_condutor_recorrente"> A infração é de responsabilidade do proprietário e quem recorre é o condutor.</label>
          </div>

          <div>
            <label><input type="checkbox" name="legitimidade" value="nao_comprova_proprietario_nem_condutor"> O recorrente não comprova ser o proprietário nem condutor.</label>
            <label><input type="checkbox" name="legitimidade" value="nao_anexa_certificado_mei"> O recorrente não anexa Certificado da Condição de Microempreendedor Individual ME.</label>
            <label><input type="checkbox" name="legitimidade" value="procurador_sem_documento_identificacao"> O procurador não apresentou documento pessoal necessário para identificação da assinatura.</label>
            <label><input type="checkbox" name="legitimidade" value="assinatura_diferente"> A assinatura difere das dos documentos apresentados.</label>
            <label><input type="checkbox" name="legitimidade" value="nao_comprova_parte_legitima"> O recorrente NÃO comprova ser parte legítima.</label>
            <label><input type="checkbox" name="legitimidade" value="nao_apresenta_documento_pessoal"> O recorrente não apresenta documento pessoal.</label>
            <label><input type="checkbox" name="legitimidade" value="nao_assinou_recurso"> O recorrente não assinou o recurso.</label>
            <label><input type="checkbox" name="legitimidade" value="nao_aplicado"> Não aplicado</label>
          </div>
        </div>
      </div>

      <div class="question-box">
        <h3>Este recurso é tempestivo?</h3>

        <div class="question-grid">
          <div>
            <label><input type="radio" name="tempestividade" value="sim"> Sim.</label>
          </div>
          <div>
            <label><input type="radio" name="tempestividade" value="nao"> Não.</label>
          </div>
        </div>
      </div>

      <div class="question-box">
        <h3>O Auto de infração foi corretamente lavrado ou emitido contendo os dados mínimos definidos pelo artigo 280 do CTB?</h3>

        <div class="question-grid">
          <div>
            <label><input type="radio" name="artigo280" value="clonagem_placa"> Sim.</label>
          </div>

          <div>
            <label><input type="radio" name="artigo280" value="auto_correto"> Não.</label>
          </div>
        </div>
      </div>

      <div class="question-box">
        <h3>O veículo infrator corresponde ao veículo notificado?</h3>

        <div class="question-grid">
          <div>
            <label><input type="radio" name="veiculo_corresponde" value="sim"> Sim.</label>
          </div>
          <div>
            <label><input type="radio" name="veiculo_corresponde" value="nao"> Não.</label>
          </div>
        </div>
      </div>

      <div class="question-box">
        <h3>O condutor do veículo foi identificado?</h3>

        <div class="question-grid">
          <div>
            <label><input type="radio" name="condutor_situacao" value="nome_incorreto"> Nome do condutor incorreto.</label>
            <label><input type="radio" name="condutor_situacao" value="sim"> Sim.</label>
            <label><input type="radio" name="condutor_situacao" value="nao"> Não.</label>
            <label><input type="radio" name="condutor_situacao" value="omissao_identificacao"> Omissão não justificada da identificação do condutor.</label>
          </div>

          <div>
            <label><input type="radio" name="condutor_complemento" value="sem_abordagem"> Não houve abordagem do veículo.</label>
            <label><input type="radio" name="condutor_complemento" value="erro_digitacao_condutor"> Erro na digitação dos dados do condutor.</label>
            <label><input type="radio" name="condutor_complemento" value="erro_identificacao_condutor"> Erro na identificação dos dados do condutor.</label>
            <label><input type="radio" name="condutor_complemento" value="nao_aplicado"> Não aplicado.</label>
          </div>
        </div>
      </div>

    </div>
  `;
}
