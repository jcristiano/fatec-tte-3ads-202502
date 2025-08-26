---
sidebar_position: 3
title: Criterios
---

# ✅ Critérios de Requisitos

Além de descrever o que o sistema deve fazer, é fundamental definir os critérios que garantem que cada requisito foi realmente atendido.

### Critérios de Aceitação
Condições claras e mensuráveis que provam se um requisito foi atendido. Eles devem ser objetivos, verificáveis por testes e compreensíveis para todos os envolvidos.

**Exemplo:**
**RF-001**: O sistema deve permitir que usuários com perfil de administrador cadastrem novos produtos.
* **Critério 1**: Após preencher os campos obrigatórios e clicar em "Salvar", o produto deve aparecer na listagem imediatamente.
* **Critério 2**: Caso algum campo obrigatório não seja preenchido, o sistema deve exibir uma mensagem de erro.
* **Critério 3**: Ao cadastrar um produto com código já existente, o sistema deve exibir uma mensagem de erro informando sobre a duplicidade.

### Critérios de Aceitabilidade
Relacionam-se ao quanto o requisito é viável e aceitável para o negócio e os usuários. Avaliam a conformidade com leis (como a LGPD) ou normas técnicas (como a WCAG).

**Exemplo:**
* A interface deve estar em conformidade com a LGPD e ser acessível segundo as diretrizes WCAG 2.1.

### Critérios de Rastreabilidade
Garantem que cada requisito possa ser rastreado desde sua origem (stakeholder, norma, caso de uso) até os artefatos de validação (casos de teste). Uma boa rastreabilidade facilita auditorias e a manutenção do sistema.

**Exemplo:**
* **Origem**: Entrevista com Gerente de Vendas.
* **Casos de Teste**: TC-001, TC-002, TC-045.

### Critérios de Testabilidade
Asseguram que o requisito possa ser verificado objetivamente. Um requisito é testável quando é específico, mensurável e sem ambiguidades, permitindo a criação de testes claros.

**Exemplo:**
* **Requisito Vago**: "O sistema deve ser rápido."
* **Requisito Testável**: "O sistema deve responder a qualquer consulta em até 2 segundos para 95% das requisições".