# Terapia Lunar

Repositório do projeto **Terapia Lunar**, criado para receber o site institucional e, futuramente, a base de um aplicativo para o trabalho da Letícia.

## Stack escolhida

O site modelo usa uma stack estática: HTML, CSS e JavaScript puro.

Essa escolha deixa a primeira versão extremamente rápida, simples de publicar
no Netlify e fácil de evoluir depois para Astro, Next.js ou um app dedicado
quando o escopo do aplicativo estiver definido.

## Estado atual

- Projeto local inicializado em Git.
- Remoto GitHub configurado em `https://github.com/marvin-ds/terapia-lunar`.
- Site modelo estático pronto para hospedagem posterior no Netlify.
- Estrutura simples para evoluir sem acoplar o projeto a um framework antes da hora.

## Estrutura

```text
.
├── index.html
├── assets/
│   ├── hero-ritual.png
│   └── hero-ritual.webp
├── netlify.toml
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── docs/
│   └── ROADMAP.md
└── app/
    └── .gitkeep
```

## Desenvolvimento local

Por enquanto, o site é estático. Para visualizar:

1. Abra `index.html` no navegador; ou
2. Use qualquer servidor estático local apontando para a raiz do projeto.

## Netlify

Quando chegar a hora de conectar a hospedagem:

- Build command: deixe em branco.
- Publish directory: `.`

O arquivo `netlify.toml` já registra essa configuração.
