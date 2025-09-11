---
sidebar_position: 4
title: Laboratorio
description: Executando o caso de uso com no Docker Lab
---

# Executando Script Python com Requests no Play with Docker (Alpine)

Este guia mostra passo a passo como configurar o ambiente Alpine no **Play with Docker** para executar o script de download de sprites de Pokémon usando Python e threads.

## 1. Instalar ferramentas básicas

```sh
apk add nano
```

* **Propósito:** instala o editor de texto `nano` para você poder editar scripts diretamente no container.

## 2. Instalar Python 3, pip e suporte a virtualenv

```sh
apk add python3 py3-pip py3-virtualenv
```

* **python3:** instala o interpretador Python 3.
* **py3-pip:** instala o gerenciador de pacotes Python `pip`.
* **py3-virtualenv:** permite criar ambientes virtuais isolados, evitando conflitos com pacotes do sistema.

## 3. Criar um ambiente virtual Python

```sh
python3 -m venv venv
```

* **Propósito:** cria uma pasta `venv` que contém um ambiente Python isolado.
* Isso evita erros como `externally-managed-environment` ao instalar pacotes.

## 4. Ativar o ambiente virtual

```sh
source venv/bin/activate
```

* **Propósito:** ativa o ambiente virtual. Todos os pacotes instalados com pip agora serão isolados do sistema.
* O prompt do terminal geralmente muda para indicar que você está dentro do virtualenv.

## 5. Instalar dependência `requests`

```sh
pip install requests
```

* **Propósito:** instala a biblioteca `requests`, necessária para fazer chamadas HTTP no Python.
* Com o virtualenv ativo, não há conflito com pacotes do sistema.

## 6. Executar o script Python

```sh
python /tmp/thread.py
```

* **Propósito:** executa o script que consulta a API do Pokémon, processa cada Pokémon em threads e baixa suas sprites.

## 7. Desativar o ambiente virtual quando terminar

```sh
deactivate
```

* **Propósito:** retorna ao Python do sistema, saindo do ambiente virtual.

---

💡 **Dicas adicionais:**

* Sempre use virtualenv no Alpine quando precisar instalar pacotes adicionais com pip.
* Você pode ajustar `max_workers` no script para controlar quantas threads simultâneas serão executadas.
* Para persistir arquivos baixados, escolha uma pasta dentro do container ou monte um volume no Play with Docker.
