---
sidebar_position: 0
---

# Introdução

O manual do calouro é um projeto antigo, que já teve várias formas:

1. Iniciou-se como um PDF, que não chegou a ser distribuído:

   - Havia rejeição a determinados símbolos e conteúdos;

1. Metamorfoseou-se em uma única página dentro do FCT App, mantendo um formato próximo ao PDF:

   - Todos os símbolos e conteúdos foram mantidos;
   - A navegação era muito ruim, pois a interface não foi feita para conteúdos grandes;
   - Era muito difícil de contribuir para, pois era necessário possuir conhecimento em Angular.

1. E, por fim, tornou-se um site próprio.

## Objetivo

O site do manual do calouro incentiva um projeto contínuo e democrático, onde os alunos podem adicionar as suas próprias dicas e experiências ao invés de construírem tudo do início a cada ano.

## Conteúdo

O manual do calouro deve ser um guia para todos os alunos da FCT, não apenas calouros e não somente do curso de ciência da computação.  
Ele deve conter informações úteis para a adaptação ao ambiente universitário, para a vida acadêmica e para a vida em Presidente Prudente.

## Tecnologias

### Framework

O site é feito com [Starlight](https://starlight.astro.build/), o _template_ de documentação do [Astro](https://astro.build/).

[O Starlight gera sites leves e rápidos](https://astro.build/blog/2023-web-framework-performance-report/), isso enquanto mantém uma proximidade razoável com markdown puro o desenvolvimento web _vanilla_ (tradicional, com HTML, CSS e JavaScript puros).

Essa proximidade permite que os contribuidores façam alterações mesmo sem saber programar.

### Biblioteca de interface do usuário

O site utiliza o [Daisy UI](https://github.com/saadeghi/daisyui), uma biblioteca de componentes Tailwind CSS.
