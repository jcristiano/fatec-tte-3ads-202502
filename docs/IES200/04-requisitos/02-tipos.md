---
sidebar_position: 2
title: Tipos
---

# ⚙️ Tipos de Requisitos

Existem três categorias principais de requisitos: Funcionais, Não Funcionais e Restrições.

### Requisitos Funcionais (RF)

Definem **o que o sistema deve fazer**. Eles descrevem as funções e os serviços que o sistema deve executar e são normalmente expressos na forma "O sistema deve...".

**Exemplos:**
* **RF001**: O sistema deve permitir que o usuário realize login com e-mail e senha.
* **RF002**: O sistema deve enviar um e-mail de confirmação após o cadastro de um novo usuário.
* **RF003**: O sistema deve permitir a filtragem de produtos por categoria e preço.

### Requisitos Não Funcionais (RNF)

Definem **como o sistema deve ser**. Eles se relacionam às qualidades que o sistema deve possuir, como:
* **Desempenho**: Tempo de resposta, capacidade.
* **Segurança**: Autenticação, criptografia.
* **Usabilidade**: Facilidade de uso, acessibilidade.
* **Confiabilidade**: Disponibilidade, tolerância a falhas.

**Exemplos:**
* **RNF001 - Desempenho**: O tempo de resposta para qualquer operação deve ser inferior a 2 segundos para 95% das requisições.
* **RNF002 - Segurança**: Todas as senhas devem ser criptografadas.
* **RNF003 - Usabilidade**: O sistema deve ser acessível para usuários com deficiência visual, seguindo as diretrizes WCAG 2.1 nível AA.

### Restrições Técnicas

São limitações que afetam a forma como o sistema deve ser desenvolvido.

**Exemplos:**
* O sistema deve funcionar em ambiente AWS.
* O sistema deve ser compatível com iOS 14 ou superior.
* O sistema deve ser desenvolvido em Java 11.
* O custo de infraestrutura não deve exceder R$5.000/mês.