---
sidebar_position: 6
title: Escalonamento de processos
description: Conceitos sobre escalonamento de processos
---

# Escalonamento de Tarefas em Sistemas Operacionais

O escalonamento de tarefas é um componente vital em sistemas operacionais, responsável por determinar a ordem de execução das tarefas prontas. Ele impacta diretamente o desempenho, a responsividade e a justiça do sistema, gerenciando recursos limitados entre múltiplas tarefas concorrentes.

## Por que o Escalonamento é Crucial?

O algoritmo de escalonamento influencia o comportamento fundamental do sistema. Diferentes cenários exigem otimizações específicas: aplicações interativas demandam baixa latência, o processamento de dados busca alta eficiência, e sistemas críticos requerem previsibilidade temporal.

## Tipos de Tarefas

As tarefas podem ser classificadas por seu comportamento temporal e uso de recursos:

### Por Comportamento Temporal
*   **Tempo Real**: Exigem previsibilidade rigorosa nos tempos de resposta, sendo cruciais em sistemas de controle industrial e automação. Falhas podem ser catastróficas.
*   **Interativas**: Respondem rapidamente a eventos externos (usuário, rede), mas sem a rigidez do tempo real. Exemplos incluem editores, navegadores e jogos. Focam em uma interface fluida e resposta rápida ao usuário.
*   **Em Lote (Batch)**: Executam sem requisitos temporais específicos, geralmente em segundo plano e sem intervenção do usuário, como backups ou cálculos científicos. Focam na eficiência global.

### Por Uso de Recursos
*   **CPU-Bound**: Utilizam intensivamente o processador (ex: conversão de vídeo, cálculos matemáticos).
*   **I/O-Bound**: Dependem principalmente de operações de entrada/saída (ex: editores, servidores web).

Uma tarefa pode alternar entre esses comportamentos durante sua execução.

## Objetivos e Métricas do Escalonamento

Os escalonadores devem equilibrar objetivos muitas vezes conflitantes:

*   **Tempo de Execução (Turnaround Time)**: Tempo total desde a criação até o encerramento da tarefa. Crucial para sistemas em lote.
*   **Tempo de Espera (Waiting Time)**: Tempo que a tarefa passa na fila de prontos, aguardando o processador.
*   **Tempo de Resposta (Response Time)**: Intervalo entre um evento e sua resposta imediata. Fundamental para sistemas interativos.
*   **Justiça (Fairness)**: Distribuição equitativa do processador entre tarefas similares.
*   **Eficiência do Sistema**: Grau de utilização do processador na execução de tarefas úteis. É afetada pela velocidade da troca de contexto, quantidade de tarefas I/O-bound e overhead do escalonador.

## Escalonamento Preemptivo vs. Cooperativo

*   **Sistemas Preemptivos**: O escalonador pode interromper uma tarefa a qualquer momento (fim do quantum, chamada de sistema, interrupção de tarefa mais prioritária) para reavaliar a fila de prontos. A maioria dos sistemas operacionais modernos é preemptiva.
*   **Sistemas Cooperativos**: A tarefa em execução só libera o processador voluntariamente (ao terminar, solicitar I/O ou liberar explicitamente). Exigiam cooperação das tarefas e eram comuns em sistemas legados.
*   **Núcleos Preemptivos Modernos**: Permitem a preempção de tarefas inclusive no modo núcleo, minimizando a latência de resposta, essencial para sistemas de tempo real.

## Algoritmos Clássicos de Escalonamento

Esses algoritmos servem de base conceitual para escalonadores modernos:

*   **First-Come, First-Served (FCFS)**: O mais simples, atende as tarefas na ordem de chegada. É fácil de implementar e previsível, mas pode causar o "efeito convés", onde tarefas curtas esperam muito tempo atrás de tarefas longas, sendo ineficiente para sistemas interativos.
*   **Round-Robin (RR)**: FCFS com preempção por tempo (quantum). Divide o tempo da CPU em fatias iguais, alternando ciclicamente. Garante justiça entre os processos e boa responsividade, ideal para sistemas interativos, mas sacrifica um pouco da eficiência bruta devido ao maior número de trocas de contexto.
*   **Shortest Job First (SJF)**: Executa sempre a tarefa mais curta disponível. Teoricamente, proporciona os menores tempos médios de execução e espera. É ideal para sistemas em lote onde a duração das tarefas é conhecida, mas apresenta desafios práticos para estimar a duração futura e risco de inanição para tarefas longas.
*   **Shortest Remaining Time First (SRTF)**: Versão preemptiva do SJF. Compara o tempo restante da tarefa atual com a duração de novas tarefas, interrompendo a execução se uma tarefa mais curta chegar. Oferece os menores tempos médios possíveis, mas intensifica o problema de inanição e aumenta a complexidade.
*   **Escalonamento por Prioridades**: Associa uma prioridade a cada tarefa, geralmente um número inteiro, para definir a ordem de execução.
    *   **Prioridades Fixas (Cooperativo e Preemptivo)**: Tarefas de maior prioridade executam primeiro. O preemptivo (PRIOp) melhora as métricas em relação ao cooperativo (PRIOc), mas ambos sofrem com o problema de **inanição**, onde tarefas de baixa prioridade podem nunca ser executadas se houver um fluxo constante de tarefas mais prioritárias.
    *   **Prioridades Dinâmicas com Envelhecimento (Aging)**: Uma solução para a inanição. Aumenta gradualmente a prioridade de tarefas que aguardam por muito tempo, garantindo que todas eventualmente recebam o processador. Permite uma distribuição proporcional do tempo de processamento conforme as prioridades estáticas.

## Definição de Prioridades

As prioridades são influenciadas por:

*   **Fatores Externos**: Informações providas pelo usuário ou administrador (classe do usuário, nível de serviço, importância crítica).
*   **Fatores Internos**: Dados coletados e estimados pelo sistema (idade da tarefa, duração estimada, interatividade, uso de recursos, envelhecimento).

Sistemas como Windows e Linux utilizam escalas de prioridade distintas para processos e threads.

## Escalonadores Modernos (Exemplo: Linux)

Sistemas operacionais reais combinam múltiplas políticas em arquiteturas sofisticadas. O Linux, por exemplo, utiliza uma arquitetura de Múltiplas Filas de Feedback, dividindo as tarefas em classes de escalonamento, cada uma com sua fila e algoritmo específico.

*   **Classes de Escalonamento do Linux**:
    *   `SCHED_DEADLINE`: Para tarefas de tempo real com prazos, usando o algoritmo Earliest Deadline First (EDF).
    *   `SCHED_FIFO`/`SCHED_RR`: Prioridades fixas sem/com quantum, respectivamente, para tempo real.
    *   `SCHED_NORMAL`/`SCHED_OTHER`: Classe padrão para tarefas interativas, implementando o Completely Fair Scheduler (CFS).
    *   `SCHED_BATCH`: Similar ao NORMAL, otimizada para tarefas CPU-bound.
    *   `SCHED_IDLE`: Menor prioridade, executa apenas se não houver outras tarefas ativas.

O **Completely Fair Scheduler (CFS)**, usado nas classes interativas, mantém tarefas em uma árvore rubro-negra ordenada por tempo de processamento realizado, garantindo que a tarefa com menor tempo acumulado seja sempre escolhida. Ele foca na justiça e proporcionalidade, adaptando-se dinamicamente à carga.

## Conclusão

A escolha do algoritmo de escalonamento é uma decisão arquitetural fundamental. Enquanto SRTF oferece as melhores métricas de tempo médio, RR se destaca em responsividade. A preempção geralmente aumenta as trocas de contexto, mas melhora os tempos médios e a interatividade. Compreender esses fundamentos é essencial para projetar e otimizar sistemas operacionais eficientes que atendam aos requisitos específicos de cada aplicação.

## Material Complementar

| Título do Material                  | Tipo   | Link |
|------------------------------------|--------|------|
| Apresentação em sala de aula | PDF    | [Download](./pdf/006/001-Escalonamento-de-Tarefas-em-Sistemas-Operacionais.pdf) |
| Livro texto para referência  | PDF    | [Download](./pdf/006/001-material_referencia.pdf) |