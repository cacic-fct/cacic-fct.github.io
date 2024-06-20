---
sidebar_position: 0
---

# Introdução

O site da SECOMPP reune todas as informações do evento.

O projeto é um esforço contínuo: não deve-se criar um novo repositório a cada ano, nem substituir o site por completo.

## Tecnologias

### Framework

O site é feito com [Astro](https://astro.build/) e contém integração com o [Svelte](https://docs.astro.build/en/guides/integrations-guide/svelte/).

[O Astro é um framework que gera sites leves e rápidos](https://astro.build/blog/2023-web-framework-performance-report/), isso enquanto mantém uma proximidade razoável com o desenvolvimento web _vanilla_ (tradicional, com HTML, CSS e JavaScript puros).

Essa proximidade é necessário por conta do perfil esperado dos [contribuidores](./Seleção%20de%20contribuidores.md).

A integração com o Svelte é usada por conta do componente da tabela de horários. Este componente foi feito em Svelte 3 e não foi migrado para o Astro.

### Biblioteca de interface do usuário

O site utiliza o [Daisy UI](https://github.com/saadeghi/daisyui), uma biblioteca de componentes Tailwind CSS.

### Pacote de ícones

O site utiliza o [Lucide Icons](https://lucide.dev/icons/).

Há um pacote para o Astro e outro para uso no Svelte.
