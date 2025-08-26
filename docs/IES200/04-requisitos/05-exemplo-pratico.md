---
sidebar_position: 5
title: Exemplo
---

# 📝 Exemplo Prático: Um Requisito Completo em Markdown

Este é um modelo de requisito que combina todos os critérios estudados, usando a notação Markdown para uma documentação clara e padronizada.

O modelo abaixo usa como base o template de requisito do arquivo `20250819-Gestao-de-Requisitos-e-Notacao-Markdown.pdf` e o exemplo do arquivo `caso_modelo_requisito.odt`.

---

# RF-001: Cadastro de Produto

## Descrição

O sistema deve permitir que usuários com perfil de administrador cadastrem novos produtos no catálogo da loja, incluindo informações como nome, preço, categoria e foto.

## Critérios de Aceitação

1.  Após preencher todos os campos obrigatórios e clicar em "Salvar", o produto deve aparecer na listagem imediatamente.
2.  Caso algum campo obrigatório não seja preenchido, o sistema deve exibir uma mensagem de erro indicando os campos faltantes.
3.  Ao tentar salvar um produto com um código já existente, o sistema deve exibir uma mensagem de erro informando sobre a duplicidade.

## Critérios de Aceitabilidade

* O preço do produto não pode ser um valor negativo.
* A categoria deve ser selecionada de uma lista pré-definida pelo administrador.
* O sistema deve estar em conformidade com a LGPD no tratamento de dados de usuários.

## Critérios de Qualidade (Não-Funcionais)

* **Performance**: O tempo de resposta para submeter o formulário de cadastro não deve ultrapassar 2 segundos.
* **Confiabilidade**: O sistema deve estar disponível 99,5% do tempo em horário comercial.
* **Usabilidade**: A tela de cadastro deve ser responsiva, adaptando-se a diferentes tamanhos de tela (desktop, tablet, celular).

## Priorização

**Prioridade**: Must Have

**Justificativa**: Esta funcionalidade é imprescindível para a primeira versão do sistema, sem a qual não é possível gerenciar o catálogo de produtos.

## Rastreabilidade

* **Origem**: Solicitação do cliente (História de Usuário HU-12).
* **Casos de Teste Relacionados**: CT-001 (Cadastro válido), CT-002 (Cadastro inválido).
* **Dependências**: RF-015 (Autenticação de Usuário).

## Testabilidade

* **Abordagem de Teste**: A funcionalidade será validada por testes automatizados que inserem diferentes combinações de dados (válidos e inválidos) e verificam os resultados esperados.