export function Questionamento() {
  return `
    <div class="bloco-questionamento">

      <h3>Questionamentos</h3>

      <div class="question-box">
        <h3>A infração encontra-se devidamente caracterizada.</h3>

        <div class="question-grid">
          <div>
            <label><input type="radio" name="caracterizada_motivo"> Balança excesso de peso.</label>
            <label><input type="radio" name="caracterizada_motivo"> Radar.</label>
            <label><input type="radio" name="caracterizada_motivo"> Auto de infração extraviado.</label>
          </div>

          <div>
            <label><input type="radio" name="caracterizada"> Não.</label>
            <label><input type="radio" name="caracterizada"> Sim.</label>
            <label><input type="radio" name="caracterizada" checked> Não aplicado</label>
          </div>
        </div>
      </div>

      <div class="question-box">
        <h3>O recorrente comprova ser parte legítima?</h3>

        <div class="question-grid">
          <div>
            <label><input type="checkbox" name="legitimidade_status">  O recorrente não anexa termo de posse..</label>
            <label><input type="checkbox" name="legitimidade_status">  O recorrente não comprova ser o proprietário.</label>
            <label><input type="checkbox" name="legitimidade_status">  O recorrente não assinou a procuração.</label>
            <label><input type="checkbox" name="legitimidade_status">  O recorrente comprova ser parte legítima.</label>
            <label><input type="checkbox" name="legitimidade_status">  Falta procuração.</label>
            <label><input type="checkbox" name="legitimidade_status">  Procurador não inscrito na OAB</label>
            <label><input type="checkbox" name="legitimidade_status">  O recorrente não apresentou contrato social.</label>
            <label><input type="checkbox" name="legitimidade_status">  A infração é de responsabilidade do proprietário e quem recorre é o condutor.</label>
          </div>

          <div>
            <label><input type="checkbox" name="legitimidade_status"> O recorrente não comprova ser o proprietário nem condutor.</label>
            <label><input type="checkbox" name="legitimidade_status"> O recorrente não anexa Certificado da Condição de Microempreendedor Individual ME.</label>
            <label><input type="checkbox" name="legitimidade_status"> O procurador (pessoa física) não apresentou o documento pessoal necessário para a identificação da assinatura no recurso.</label>
            <label><input type="checkbox" name="legitimidade_status"> A assinatura difere das dos documentos apresentados.</label>
            <label><input type="checkbox" name="legitimidade_status"> O recorrente NÃO comprova ser parte legítima.</label>
            <label><input type="checkbox" name="legitimidade_status"> O recorrente não apresenta documento pessoal.</label>
            <label><input type="checkbox" name="legitimidade_status"> O recorrente não assinou o recurso.</label>
            <label><input type="checkbox" name="legitimidade_status" checked> Não aplicado</label>
          </div>
        </div>

      </div>


      <div class="question-box">
        <h3>Este recurso é tempestivo?</h3>

        <div class="question-grid">
          <div>
            <label><input type="radio" name="caracterizada_motivo"> Sim.</label>
          </div>
          <div>
            <label><input type="radio" name="caracterizada_motivo"> Não.</label>
          </div>
        </div>

      </div>
      <div class="question-box">
        <h3>O Auto de infração foi corretamente lavrado ou emitido contendo os dados mínimos definidos pelo artigo 280 do CTB?</h3>

        <div class="question-grid">
          <div>
            <label><input type="checkbox" name="legitimidade">  O recorrente comprova a clonagem da placa do veículo.</label>
            <label><input type="checkbox" name="legitimidade">  Veículo clonado.</label>
            <label><input type="checkbox" name="legitimidade">  O recorrente comprova que o condutor do veículo estava devidamente habilitado.</label>
            <label><input type="checkbox" name="legitimidade">  O recorrente comprova suas alegações.</label>
            <label><input type="checkbox" name="legitimidade">  Decurso de prazo. (prescrição)</label>
            <label><input type="checkbox" name="legitimidade">  Erro na identificação do Chassi/Renavam.</label>
            <label><input type="checkbox" name="legitimidade">  Erro/omissão na identificação da espécie do veículo.</label>
            <label><input type="checkbox" name="legitimidade">  Erro na identificação da marca/modelo do veículo.</label>
            <label><input type="checkbox" name="legitimidade">  Erro/omissão na identificação do veículo infrator.</label>
            <label><input type="checkbox" name="legitimidade">  Erro na identificação do local da infração.</label>
            <label><input type="checkbox" name="legitimidade">  Erro na tipificação da infração.</label>
            <label><input type="checkbox" name="legitimidade">  O recorrente comprova que o veículo estava devidamente licenciado.</label>
          </div>

          <div>
            <label><input type="checkbox" name="legitimidade_status">  Sim.</label>
            <label><input type="checkbox" name="legitimidade_status">  Rasura na identificação do veículo infrator.</label>
            <label><input type="checkbox" name="legitimidade_status">  Excludentes de responsabilidade.(Furto ou roubo comprovado, estado de necessidade, coação irreversível, estrito cumprimento do dever legal, etc)</label>
            <label><input type="checkbox" name="legitimidade_status">  Infração caracterizada como "bis in idem".</label>
            <label><input type="checkbox" name="legitimidade_status">  Não.</label>
            <label><input type="checkbox" name="legitimidade_status">  Erro na digitação do código do município.</label>
            <label><input type="checkbox" name="legitimidade_status">  O auto de infração foi corretamente emitido. (Autuação registrada por equipamento RADAR ou BALANÇA).</label>
            <label><input type="checkbox" name="legitimidade_status">  Erro na digitação dos dados de identificação do veículo infrator.</label>
            <label><input type="checkbox" name="legitimidade_status">   Erro na digitação do código da infração.</label>
            <label><input type="checkbox" name="legitimidade_status" checked>   Não aplicado</label>
          </div>
        </div>

      </div>


      <div class="question-box">
        <h3>O veículo infrator corresponde ao veículo notificado?</h3>

        <div class="question-grid">
          <div>
            <label><input type="radio" name="legitimidade"> Sim.</label>
          </div>
          <div>
            <label><input type="radio" name="legitimidade"> Não.</label>
          </div>
        </div>

      </div>

      <div class="question-box">
        <h3>O condutor do veiculo foi identificado</h3>

        <div class="question-grid">
          <div>
            <label><input type="radio" name="legitimidade">   Nome do condutor do veículo está incorreto.</label>
            <label><input type="radio" name="legitimidade">   Sim</label>
            <label><input type="radio" name="legitimidade">   Não.</label>
            <label><input type="radio" name="legitimidade">   Omissão não justificada da identifcação do condutor no auto de infração</label>
          </div>

          <div>
            <label><input type="radio" name="legitimidade_status">  Não houve abordagem do veículo infrator.</label>
            <label><input type="radio" name="legitimidade_status">  Erro na digitação de dados de identificação do condutor.</label>
            <label><input type="radio" name="legitimidade_status">  Erro na identificação de dados de identificação do condutor.</label>
            <label><input type="radio" name="legitimidade_status" checked>  Não aplicado.</label>
          </div>
        </div>

      </div>

    </div>
    `;
}
