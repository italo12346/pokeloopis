# 🎮 PokéGuess

Um jogo de adivinhação de Pokémon feito com React. A silhueta de um Pokémon é exibida e o jogador deve descobrir o nome antes do tempo acabar.

## Como jogar

1. Uma silhueta de Pokémon aparece na tela
2. Digite o nome no campo de texto e pressione **Enter**
3. Acertou? +1 ponto e o próximo Pokémon aparece
4. Errou? O score zera — tente de novo!
5. Use **pular pokémon** se travar, mas o score também zera

O recorde é salvo automaticamente no `localStorage`.

## Tecnologias

- **React** — interface e gerenciamento de estado
- **PokéAPI** — dados e nomes dos Pokémon (`pokeapi.co`)
- **Pokémon Assets CDN** — imagens oficiais da Pokédex
- **CSS** com `Press Start 2P` (Google Fonts) — visual retrô-game

## Rodando o projeto

```bash
npm install
npm start
```

## Estrutura

```
src/
├── App.jsx              # Componente raiz e lógica principal
├── App.css              # Estilos globais e tema escuro
└── components/
    ├── Input/           # Campo de texto e validação da resposta
    ├── Placar/          # Score atual e recorde
    ├── Pokemon/         # Card com a silhueta/imagem do Pokémon
    └── Tipo/            # Badge com o tipo do Pokémon
```

## Detalhes técnicos

- O jogo sorteia Pokémon de #001 a #1010 aleatoriamente
- A comparação de nomes normaliza acentos (NFD) e ignora maiúsculas
- O recorde persiste entre sessões via `localStorage`
- A cor do card e do badge muda de acordo com o tipo do Pokémon