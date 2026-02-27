import { RECURSO_BASE } from "../../../DATA/DATA-RECURSO.js";

export function Dados() {
  const dR = RECURSO_BASE;

  return `
    <div class="bloco-dados">
      <h3>Auto de Infração</h3>
      <table class="table-dados">
        <tbody>
          <tr>
            <td><strong>Auto de infração</strong></td>
            <td>${dR.autoInfracao.numero}</td>
            <td><strong>Data e hora</strong></td>
            <td>${dR.autoInfracao.dataHora}</td>
          </tr>
          <tr>
            <td><strong>Processamento</strong></td>
            <td>${dR.autoInfracao.processamento}</td>
            <td><strong>Município</strong></td>
            <td>${dR.autoInfracao.municipio}</td>
          </tr>
          <tr>
            <td><strong>URG</strong></td>
            <td>${dR.autoInfracao.urg}</td>
          </tr>
          <tr>
            <td><strong>Infração</strong></td>
            <td colspan="3">
              ${dR.autoInfracao.infracao.codigo} - ${dR.autoInfracao.infracao.descricao}
            </td>
          </tr>
          <tr>
            <td><strong>Local</strong></td>
            <td>${dR.autoInfracao.local}</td>
            <td><strong>Recebimento/Publicação</strong></td>
            <td>${dR.autoInfracao.recebimentoPublicacao}</td>
          </tr>
          <tr>
            <td><strong>Órgão Autuador</strong></td>
            <td>${dR.autoInfracao.orgaoAutuador}</td>
            <td><strong>Agente</strong></td>
            <td>${dR.autoInfracao.agente}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bloco-dados">
      <h3>Veículo</h3>
      <table class="table-dados">
        <tbody>
          <tr>
            <td><strong>Placa</strong></td>
            <td>${dR.veiculo.placa}</td>
            <td><strong>Renavam</strong></td>
            <td>${dR.veiculo.renavam}</td>
          </tr>
          <tr>
            <td><strong>Marca / Modelo</strong></td>
            <td>${dR.veiculo.marcaModelo}</td>
            <td><strong>Cor</strong></td>
            <td>${dR.veiculo.cor}</td>
          </tr>
          <tr>
            <td><strong>Nome do Proprietário</strong></td>
            <td>${dR.veiculo.proprietario.nome}</td>
            <td><strong>CPF/CNPJ</strong></td>
            <td>${dR.veiculo.proprietario.documento}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bloco-dados">
      <h3>Requerente</h3>
      <table class="table-dados">
        <tbody>
          <tr>
            <td><strong>Requerente</strong></td>
            <td>${dR.requerente.tipoRequerente}</td>
            <td><strong>Tipo</strong></td>
            <td>${dR.requerente.tipoPessoa}</td>
          </tr>
          <tr>
            <td><strong>CPF/CNPJ</strong></td>
            <td>${dR.requerente.documento}</td>
            <td><strong>Nome / Razão Social</strong></td>
            <td>${dR.requerente.nome}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bloco-dados">
      <h3>Infrator</h3>
      <table class="table-dados">
        <tbody>
          <tr>
            <td><strong>Nome</strong></td>
            <td>${dR.infrator.nome}</td>
            <td><strong>CPF/CNPJ</strong></td>
            <td>${dR.infrator.documento}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}
