# Pokémon Threaded Download - Explicação Didática

Este arquivo explica um exemplo de Python que baixa sprites de Pokémon usando threads, adequado para alunos de Sistemas Operacionais I.

---

## Fluxo do Programa

```
+-------------------+
| Consulta Pokémon  |
| API (Lista)       |
+---------+---------+
          |
          v
+-------------------+
| Para cada Pokémon |
| criar thread      |
+---------+---------+
          |
          v
+-------------------+
| Consulta detalhes  |
| API (sprites)     |
+---------+---------+
          |
          v
+-------------------+
| Escolher sprite   |
| disponível        |
+---------+---------+
          |
          v
+-------------------+
| Download da       |
| imagem            |
+-------------------+
```

## Conceitos de SO Aplicados

1. **Threads (ThreadPoolExecutor)**: permite processar múltiplos Pokémon simultaneamente.
2. **I/O de rede e arquivos**: `requests.get` e `open` para salvar imagens.
3. **Estruturas de dados**: `dataclass` organiza os dados como structs em C.
4. **Tratamento de erros**: `try/except` captura problemas de rede e I/O.

## Código Comentado

```python
#!/usr/bin/env python3
import requests
import os
from dataclasses import dataclass
from typing import Optional
from concurrent.futures import ThreadPoolExecutor, as_completed

# Dataclasses para organizar os dados do Pokémon
@dataclass
class PokemonResult:
    name: str
    url: str

@dataclass
class PokemonListResponse:
    count: int
    next: Optional[str]
    previous: Optional[str]
    results: list[PokemonResult]

@dataclass
class DreamWorld:
    front_default: Optional[str]
    front_female: Optional[str]

@dataclass
class Home:
    front_default: Optional[str]
    front_female: Optional[str]
    front_shiny: Optional[str]
    front_shiny_female: Optional[str]

@dataclass
class OfficialArtwork:
    front_default: Optional[str]
    front_shiny: Optional[str]

@dataclass
class Showdown:
    back_default: Optional[str]
    back_female: Optional[str]
    back_shiny: Optional[str]
    back_shiny_female: Optional[str]
    front_default: Optional[str]
    front_female: Optional[str]
    front_shiny: Optional[str]
    front_shiny_female: Optional[str]

@dataclass
class Other:
    dream_world: DreamWorld
    home: Home
    official_artwork: OfficialArtwork
    showdown: Showdown

@dataclass
class Sprites:
    back_default: Optional[str]
    back_female: Optional[str]
    back_shiny: Optional[str]
    back_shiny_female: Optional[str]
    front_default: Optional[str]
    front_female: Optional[str]
    front_shiny: Optional[str]
    front_shiny_female: Optional[str]
    other: Other

# Funções de conversão e download
def from_dict_to_pokemon_list(data: dict) -> PokemonListResponse:
    results = [PokemonResult(**item) for item in data["results"]]
    return PokemonListResponse(
        count=data["count"],
        next=data["next"],
        previous=data["previous"],
        results=results
    )

def from_dict_to_sprites(data: dict) -> Sprites:
    return Sprites(
        back_default=data.get("back_default"),
        back_female=data.get("back_female"),
        back_shiny=data.get("back_shiny"),
        back_shiny_female=data.get("back_shiny_female"),
        front_default=data.get("front_default"),
        front_female=data.get("front_female"),
        front_shiny=data.get("front_shiny"),
        front_shiny_female=data.get("front_shiny_female"),
        other=Other(
            dream_world=DreamWorld(**data["other"]["dream_world"]),
            home=Home(**data["other"]["home"]),
            official_artwork=OfficialArtwork(**data["other"]["official-artwork"]),
            showdown=Showdown(**data["other"]["showdown"])
        )
    )

def download_sprite(sprite_url: str, filename: str, folder: str = "sprites") -> None:
    if not sprite_url:
        return

    os.makedirs(folder, exist_ok=True)
    filepath = os.path.join(folder, filename)

    try:
        response = requests.get(sprite_url, stream=True, timeout=10)
        if response.status_code == 200:
            with open(filepath, "wb") as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            print(f"✅ {filename} salvo em {filepath}")
        else:
            print(f"⚠️ Erro {response.status_code} ao baixar {sprite_url}")
    except Exception as e:
        print(f"❌ Erro no download de {sprite_url}: {e}")

def process_pokemon(poke: PokemonResult, folder: str = "/tmp/download") -> None:
    try:
        poke_response = requests.get(poke.url, timeout=10)
        if poke_response.status_code != 200:
            print(f"❌ Erro ao carregar detalhes de {poke.name}")
            return

        poke_data = poke_response.json()
        sprites = from_dict_to_sprites(poke_data["sprites"])

        sprite_image = (
            getattr(sprites.other.dream_world, "front_default", None)
            or getattr(sprites.other.official_artwork, "front_default", None)
            or getattr(sprites, "front_default", None)
        )

        if sprite_image:
            filename = f"{poke.name}.png"
            download_sprite(sprite_image, filename, folder)
        else:
            print(f"⚠️ Nenhuma sprite encontrada para {poke.name}")

    except Exception as e:
        print(f"❌ Erro no processamento de {poke.name}: {e}")

# Bloco principal
if __name__ == "__main__":
    url = "https://pokeapi.co/api/v2/pokemon?limit=50"  # menor para testes
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        pokemon_list = from_dict_to_pokemon_list(data)
        print(f"Total de Pokémon: {pokemon_list.count}")

        # ThreadPoolExecutor para processamento paralelo
        with ThreadPoolExecutor(max_workers=5) as executor:
            futures = [executor.submit(process_pokemon, poke) for poke in pokemon_list.results[:pokemon_list.count]]
            for future in as_completed(futures):
                future.result()  # força exceções a aparecerem
    else:
        print(f"Erro ao acessar a URL: {response.status_code}")
```

---

**Observação Didática:** cada thread processa um Pokémon de forma independente, mostrando como **concorrência** pode acelerar operações de I/O em Python.

```
```
