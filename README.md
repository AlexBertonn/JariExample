Link para acesso: https://alexbertonn.github.io/JariExample/

1. Objetivo
Implementar melhorias funcionais no módulo 'Análise de Recurso' do SGIV, com foco em: padronização da redação, redução de retrabalho, eliminação de controles paralelos (planilhas externas), aumento de produtividade e melhoria da rastreabilidade das decisões.
2. Escopo da atualização
A atualização contempla os seguintes itens:
Reestruturação da tela de consulta de recursos.
Ajustes na aba Questionamento (seleções estruturadas).
Estruturação da aba Alegações (seleções e status).
Reestruturação da aba Parecer (código, voto, justificativa e textos derivados).
Inclusão do campo Observações (Analista e Revisor) com retorno na tabela principal.
Geração automática de textos de análise com base nas seleções realizadas.
3. Alterações funcionais
3.1 Tela de consulta de recursos
Proposta de tela única de consulta, com filtros por JARI nº/Protocolo, Código, Série, Número do Auto, Placa, Analista e Status (pendente análise / pendente aprovação).
Campos obrigatórios no retorno em tabela:
Campo
Descrição
Código
Identificador interno do recurso.
JARI nº/Protocolo
Número de protocolo do recurso.
Auto de Infração
Número do auto vinculado ao recurso.
Placa
Placa do veículo vinculada ao auto.
Observações
Texto livre para comunicação Analista/Revisor (retorna na listagem).

3.2 Aba Questionamento
Principais ajustes:
Adição de seleção múltipla (Checkbox), visando que hoje há apenas a seleção por meio de seletor único (Radio).

3.3 Aba Alegações
Inclusão de campos estruturados para alegações, com separador entre alegações de “comprovação” e “lavratura”.
Regra de negócio: as seleções devem gerar automaticamente o texto no campo 'Alegações' da aba Parecer, incluindo a descrição da infração cadastrada.

3.4 Aba Parecer
Estrutura proposta:
Admissibilidade (somente leitura; derivado do Questionamento).
Alegações (somente leitura; derivado das Alegações e da descrição da infração).
Código do Parecer (select).
Justificativa (textarea editável; texto padrão atrelado ao código selecionado).
Voto (select: Deferimento / Indeferimento).
Regra de negócio: ao selecionar um código de parecer, o sistema deve carregar o texto padrão correspondente na justificativa, permitindo edição posterior.

3.5 Aba Observações
Inclusão de campo Observações com subdivisão em:
Observações do Analista.
Observações do Revisor.
Regra de negócio: as observações devem ser salvas junto ao recurso e retornadas na coluna 'Observações' da tabela principal.

4. Benefícios técnicos esperados
Benefício
Descrição
Padronização
Uniformiza redação e reduz variação entre analistas.
Agilidade
Diminui tempo de escrita manual e acelera a decisão.
Rastreabilidade
Mantém decisão, voto e observações vinculados ao recurso.
Integração
Reduz dependência de planilhas/controles paralelos.
Consistência
Respostas e justificativas com base em catálogo de opções.


