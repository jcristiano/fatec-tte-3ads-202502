---
sidebar_position: 1
title: Debate sobre a crise do software
---

# A Crise Perene e a Evolução da Engenharia de Software

A engenharia de software tem sido marcada por um ciclo contínuo de crises, evolução e novos desafios, culminando na situação atual de "regressão disfarçada de produtividade" [1]. Esta jornada nos leva desde os primórdios caóticos até a era da Inteligência Artificial (IA), que, apesar das promessas, introduziu novos problemas e exacerbou falhas antigas [1-5].

## Origens e a Primeira Crise do Software (Décadas de 1960 e 1970)

A disciplina de engenharia de software, como a conhecemos hoje, não existia formalmente antes da década de 1960 [6, 7]. A programação era **manual**, feita em cartões perfurados ou diretamente em linguagens de máquina e Assembly, sendo **altamente propensa a erros** [6, 7].

Em 1968, numa conferência da OTAN na Alemanha, os maiores especialistas da época cunharam o termo **"Crise do Software"** [6, 8]. As principais características dessa crise incluíam:
*   **Projetos atrasavam meses ou anos** e os orçamentos estouravam [8, 9].
*   **Sistemas falhavam frequentemente** sem explicação clara [8, 9].
*   O **código era uma "verdadeira bagunça"**, sem organização, padrões ou separação de responsabilidades [8, 9].
*   A manutenção era um pesadelo, levando à mentalidade de **"Se funcionou, deixa assim"** [8, 9].

As causas dessa crise original foram o **descompasso entre o avanço do hardware e a habilidade dos programadores** de organizarem o desenvolvimento, uma **crise de oferta** (demanda maior que a capacidade de desenvolvimento) e uma **crise de manutenção** [10, 11]. Percebeu-se que a "crise" não era temporária, mas sim um conjunto de **problemas perenes inerentes à complexidade do desenvolvimento de software** [12, 13].

## A Era de Ouro: Busca por Ordem e Qualidade (Décadas de 1970 a 2000)

Em resposta ao caos, a década de 1970 marcou o início da formalização do desenvolvimento de software [14, 15].
*   **Programação Estruturada**: Em 1970, Edsger Dijkstra denunciou o uso desenfreado do GOTO e propôs a **programação estruturada**, baseada em sequência, condição (if-else) e repetição (loop), visando um fluxo de programa previsível e legível [7, 15-17].
*   **Encapsulamento de Decisões**: Em 1972, David Parnas introduziu o conceito de **esconder a complexidade interna** de um módulo de software, expondo apenas uma interface limpa [15, 16].
*   **Linguagens de Programação**: Linguagens como Pascal, Algol, Modula e Ada surgiram, incentivando a clareza, modularização e legibilidade, enquanto Cobol, Fortran e Assembly ainda dominavam a indústria [15, 18].

A década de 1980 viu a **Engenharia de Software** ganhar força como disciplina, tratando o software como algo que requer **arquitetura e engenharia** [15, 19].
*   **Programação Orientada a Objetos (POO)**: Originada na década de 1960 (Simula 67) e refinada na década de 1970 (Smalltalk), a POO foi popularizada nos anos 80 com linguagens como C++ e Objective C [19-21]. Sua proposta era **quebrar o software em partes menores, reutilizáveis e isoladas**, cada uma com uma única responsabilidade, mudando a mentalidade do programador para a de um "arquiteto de soluções" [20-22].
    *   Os pilares da POO incluem **encapsulamento, herança, polimorfismo e abstração** [23, 24].
    *   A POO veio resolver problemas de modularidade, reusabilidade, manutenibilidade e escalabilidade, permitindo modelar o domínio de forma mais natural [22, 25].

Os anos 90 foram um período de **"boom" e padronização** [21, 26].
*   **Design Patterns**: Em 1994, o livro "Design Patterns" catalogou 23 padrões de projeto (como Decorator, Factory, Strategy, Observer), criando um **"vocabulário universal"** para a comunidade técnica e fornecendo soluções testadas para problemas comuns [21, 23, 27, 28]. Eles representam uma **fusão entre estratégia e arquitetura** [29, 30].
*   **Java**: Lançado em 1995, Java popularizou definitivamente a POO no mundo corporativo, tornando-a o **"padrão obrigatório do mercado"** devido ao seu foco em portabilidade e legibilidade [31, 32].

A década de 2000 consolidou essa evolução, sendo considerada por muitos a "era de ouro da engenharia de software" [33, 34].
*   **Princípios SOLID**: Robert Martin sintetizou conhecimentos para evitar código frágil, acoplado e bagunçado, promovendo um design de código consciente [32, 33, 35, 36].
*   **Manifesto Ágil**: Em 2001, 17 desenvolvedores criaram o manifesto, buscando alternativas mais **flexíveis, colaborativas e focadas na entrega de valor** ao cliente, em contraste com metodologias rígidas da época [33, 37].
*   **Domain-Driven Design (DDD)**: Eric Evans, em 2003, propôs modelar o software olhando para o **domínio do negócio**, garantindo que desenvolvedores e especialistas falassem a mesma língua [34, 37].
*   **Clean Code**: Robert Martin publicou "Clean Code" em 2008, defendendo código limpo, funções pequenas, responsabilidades bem definidas e testes automatizados [38].
*   **Object Calisthenics**: Jeff Bay trouxe nove regras de ouro para forçar um código coeso e desacoplado [38].

## Novos Vilões e a Crise de Significado

Apesar da excelência técnica alcançada, essa era também deu origem a novos problemas:
*   **Overengineering**: O **excesso de engenharia e complexidade desnecessária** surgiu quando princípios viraram dogmas e padrões se tornaram obrigações. Problemas simples recebiam "arquiteturas de guerra", sufocando a simplicidade e confundindo complexidade com senioridade [39-43]. Essa prática foi temporariamente silenciada pela recessão global de 2007-2008, mas ressurgiu [40, 42].
*   **Crise de Significado**: Uma "crise de significado" é enfrentada no século XXI, caracterizada pela **abundância de fatos e escassez de compreensão e sabedoria**, resultando em alto *turnover* e confusão sobre propósitos individuais e organizacionais [4, 44-49]. O foco excessivo em "quem, quando, o quê e onde" levou à perda do "sentido" do que está sendo construído [47, 49, 50].
*   **Underengineering**: Com o boom dos *smartphones* e a corrida por presença digital (pós-2010), a pressão por velocidade e **"entrega, entrega e entrega"** levou à **distorção das metodologias ágeis** [41, 43, 51, 52]. O programador se tornou um "entregador de tickets", sacrificando arquitetura e qualidade [43, 52]. A pandemia de COVID-19 intensificou essa pressão, com sistemas sendo feitos "sem estrutura nenhuma", regras de negócio jogadas em *controllers*, e falta de testes e design, priorizando a velocidade sobre a qualidade e a sustentabilidade [43, 52-54].

## A Era da IA e a "Cracolândia Digital"

A mais recente reviravolta veio com a ascensão da Inteligência Artificial Generativa [54, 55].
*   **Promessas da IA**: Ferramentas como GPT3 (2020), GitHub Copilot (2021), ChatGPT, Gemini, Cursor e Claude surgiram, prometendo gerar código, explicar, refatorar e analisar, com a sedutora ideia de "digite um comentário e ganhe um bloco de código funcional" [54-56].
*   **Efeitos Colaterais**: Rapidamente, começaram a surgir problemas como **código duplicado, vulnerabilidades, soluções de procedência duvidosa e sistemas frágeis** [56, 57].
*   **A "Mediocridade Regurgitada"**: O problema fundamental é que a **IA foi treinada com "nossa mediocridade"** [57-59]. Ela aprendeu com "código lixo" de repositórios públicos, respostas variadas do Stack Overflow, documentação incompleta e posts antigos de fóruns, "regurgitando o lixo que a gente jogou lá atrás" [57, 59, 60].
*   **"Vibe Coding"**: Surgiu uma nova geração de programadores que **"idolatram a terceirização do raciocínio"**, descrevendo problemas e esperando que a IA os resolva [59, 60]. Essa prática, apelidada de **"vibe coding"**, é vista como um "nome bonito para justificar a preguiça" [60, 61]. Programadores não questionam, apenas copiam, colam e colocam em produção, sem entender lógica, arquitetura, refatoração, escalabilidade ou performance [59-62]. A filosofia é que "pensar demais atrasa", "estudar boas práticas é perda de tempo" e "arquitetura é frescura" [60, 61].
*   **Consequência Atual**: O código nas empresas está se tornando uma "colcha de retalhos imprevisível", impossível de dar manutenção e refatorar, levando a sistemas frágeis, lentos e cheios de código gerado sem sentido [62]. Isso cria um **ciclo de mediocridade que se retroalimenta**, onde a IA continua aprendendo com os novos códigos gerados por ela mesma e não verificados pelos desenvolvedores [62]. A **próxima grande crise do software** já não é uma possibilidade, mas "questão de tempo" [60, 63].

## O Caminho à Frente: Responsabilidade e Conhecimento

Para resgatar a engenharia de software, é crucial entender que a profissão de programador não será destruída pela IA, mas sim pela **preguiça e pela "burrice"** [63-65]. A IA apenas reflete, não decide, não pensa, não projeta sistemas e não compreende o domínio ou a empatia pelo usuário; esse papel ainda pertence ao **engenheiro, programador e arquiteto de software** [64, 65].

O caminho para o futuro da engenharia de software envolve:
*   **Resgatar a responsabilidade técnica** [64, 65].
*   **Voltar a estudar os fundamentos** [64, 65].
*   Desenvolver **pensamento crítico** e capacidade de avaliação [65, 66].
*   Ter **"vergonha na cara" ao escrever código**, priorizando a qualidade e a clareza [66, 67].
*   Compreender o **impacto do software em sistemas críticos** (hospitais, carros autônomos, aviões) [66, 67].
*   Buscar o **significado por trás dos fatos**, conectando-se ao propósito do negócio [67, 68].
*   Equilibrar **estratégia e arquitetura** no contexto de cada projeto, buscando a simplicidade e projetando para a mudança [69, 70].

## Material Complementar

Você pode baixar o resumo em PDF clicando aqui:  

| Título do Material                  | Tipo   | Link |
|------------------------------------|--------|------|
| Apresentação em sala de aula | PDF    | [Download](./pdf/A-Crise-Evolucao-e-o-Futuro-da-Engenharia-de-Software.pdf) |
