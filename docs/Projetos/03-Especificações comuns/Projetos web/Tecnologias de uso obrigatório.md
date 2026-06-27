# Tecnologias de uso obrigatório

O CACiC tenta acompanhar as últimas tendências entre os desenvolvedores, com o propósito de manter os projetos próximos do que há de mais moderno e eficiente.  
Caso haja alguma tecnologia que você gostaria de sugerir em substituição a alguma desta lista, sinta-se à vontade para iniciar uma discussão.

## GitHub Issues

Todos os projetos devem usar o GitHub Issues e/ou GitHub Project para gerenciar as tarefas do projeto.

Não se deve usar ferramentas externas ao GitHub para gerenciar tarefas do projeto, como Trello, Jira, etc.

## TypeScript

Todos os projetos devem ser escritos em TypeScript.

O TypeScript é uma linguagem de programação que estende o JavaScript ao adicionar tipagem estática ao código. Ela permite que o código seja menos propenso a erros, além de facilitar em manutenções futuras.

## Lint

Todos os projetos devem usar ESLint ou Oxlint.

O Lint realiza uma análise de código estática para identificar padrões problemáticos.

Ele ajuda a manter o código limpo, organizado e padronizado.

## JSDoc

Todos os projetos devem ter código documentado com JSDoc onde for necessário.

Onde não foi possível documentar com JSDoc, o código deve ser documentado em comentários simples.

Caso não seja possível documentar o código, a funcionalidade deve ser descrita ensta documentação.

## Formatter

Todos os projetos JavaScript do CACiC devem usar o Prettier ou Oxfmt, com configurações baseadas nas existentes em outros projetos.

Ferramentas de formatação de código ajudam a manter o código limpo, organizado e padronizado.

## Gerenciador de pacotes bun

Todos os projetos devem usar o gerenciador de pacotes [bun](https://bun.sh/package-manager).

É necessário que você tenha o bun instalado em sua máquina para instalar as dependências de qualquer projeto do CACiC.

O bun foi escolhido, pois é o mais rápido gerenciador de pacotes disponível.  
Ele supera o yarn e até mesmo o pnpm!
