---
sidebar_position: 2
title: Atividades
description: Atividades sobre Threads
---

# Atividades: Programação Concorrente com Threads

Nesta seção você encontrará propostas de problemas práticos para exercitar o uso de **threads** em linguagens como C/C++, Java ou Python.

---

## 1. Contador de Vogais em Arquivos

**Descrição:**  
Implemente um programa que leia diversos arquivos de texto. Cada thread será responsável por processar um arquivo (ou parte dele), contando quantas vogais existem. No final, o programa deve exibir o total geral.

**Objetivo Didático:**  
Dividir um problema em partes independentes e aplicar threads para acelerar o processamento de texto.

**Sugestão de Linguagem:**  
C/C++ ou Python

---

## 2. Download Simultâneo de Arquivos (Simulação)

**Descrição:**  
Crie um programa que simule o download de arquivos a partir de diferentes URLs. Cada thread representa um download, e o tempo de conclusão pode ser simulado com `sleep` de duração variável.

**Objetivo Didático:**  
Compreender como múltiplas tarefas independentes podem ser executadas em paralelo.

**Sugestão de Linguagem:**  
Java

---

## 3. Multiplicação de Matrizes em Paralelo

**Descrição:**  
Implemente a multiplicação de duas matrizes. Cada thread deve ser responsável por calcular uma ou mais linhas da matriz resultado.

**Objetivo Didático:**  
Explorar o uso de threads em cálculos matemáticos e manipulação de memória compartilhada.

**Sugestão de Linguagem:**  
C/C++

---

## 4. Servidor de Chat Simplificado (Simulação)

**Descrição:**  
Implemente uma simulação de servidor de chat. Cada thread representa um cliente conectado, sendo responsável por "ouvir" e "responder" mensagens via console.

**Objetivo Didático:**  
Introduzir o uso de threads para gerenciar múltiplos usuários simultaneamente.

**Sugestão de Linguagem:**  
Java

---

## 5. Busca de Números Primos em Intervalos

**Descrição:**  
Implemente um programa que divida o intervalo de 1 até 1.000.000 entre várias threads. Cada thread deve identificar os números primos em sua faixa.

**Objetivo Didático:**  
Aplicar threads para dividir e acelerar cálculos intensivos.

**Sugestão de Linguagem:**  
Python ou C++

---

## 6. Problema Produtor-Consumidor

**Descrição:**  
Implemente um programa com uma fila compartilhada. Uma thread produtora insere números aleatórios na fila. Outras threads consumidoras retiram números e processam (ex.: calcular o quadrado do número).

**Objetivo Didático:**  
Praticar sincronização de threads utilizando mutex ou semáforos.

**Sugestão de Linguagem:**  
Java ou C++

---

## 7. Simulação de Corrida (Carros ou Cavalos)

**Descrição:**  
Implemente uma corrida em que cada thread representa um carro ou cavalo. A cada segundo, cada participante avança de forma aleatória. O programa deve exibir a posição até alguém vencer.

**Objetivo Didático:**  
Visualizar a concorrência de forma lúdica e interativa.

**Sugestão de Linguagem:**  
Python ou Java

---

## 8. Indexação de Arquivos de Texto

**Descrição:**  
Implemente um programa que leia múltiplos arquivos. Cada thread deve criar um índice local (quantidade de ocorrências de cada palavra). No final, os índices devem ser combinados em uma estrutura única.

**Objetivo Didático:**  
Exercitar a combinação de resultados parciais de threads em uma estrutura compartilhada.

**Sugestão de Linguagem:**  
Python ou Java

---
