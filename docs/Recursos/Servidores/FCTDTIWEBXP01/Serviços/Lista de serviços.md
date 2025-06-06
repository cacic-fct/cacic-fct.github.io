---
title: Lista de serviços
---

O servidor do FCT App também hospeda outros serviços utilizados pelo CACiC.

## Serviços próprios do CACiC

### FCT App

Disponível em [fctapp.cacic.dev.br](https://fctapp.cacic.dev.br).

### Gerador de e-mails

Disponível em [emails.cacic.dev.br](https://emails.cacic.dev.br).

### Error pages

Disponível como middleware do Traefik.

## Authentik (autenticação)

Utilizado para autenticação comum entre os serviços do CACiC.

Deve-se fazer login com a conta Google.

Disponível em [auth.cacic.dev.br](https://auth.cacic.dev.br).

Acesse [email-authentication-flow](https://auth.cacic.dev.br/if/flow/email-authentication-flow/) para login com e-mail e senha.

O Authentik é mais simples que o Keyclock para usos internos.

## Crowdsec

Serviço de proteção contra ataques de rede.

## Grafana (painel de monitoramento)

Painel de monitoramento do CACiC.

Disponível em [grafana.cacic.dev.br](https://grafana.cacic.dev.br).

## Glitchtip (monitoramento)

Platforma de monitoramento de erros e performance de projetos do CACiC.

Disponível em [glitchtip.cacic.dev.br](https://glitchtip.cacic.dev.br).

## Immich (fotos)

Serviço de armazenamento de fotos do CACiC, utilizado para divulgação de álbuns de eventos acadêmicos.

Disponível em [fotos.cacic.dev.br](https://fotos.cacic.dev.br) para a unespNET.

## Infisical (segredos)

Serviço de armazenamento de segredos do CACiC.

Disponível em [secrets.cacic.dev.br](https://secrets.cacic.dev.br) para a unespNET.

:::danger

Todos que possuem acesso ao servidor também possuem acesso aos segredos armazenados no Infisical.

:::

## Mailcatcher ("fake" SMTP)

Serviço de SMTP utilizado para testes de envio de e-mails.

Servidor disponível em `mailcatcher:1025` na rede Docker `smtp` e `traefik`.  
Caixa de entrada disponível em [smtp.cacic.dev.br](https://smtp.cacic.dev.br).

## Plausible (analytics)

Serviço de análise do CACiC.

Substitui o Google Analytics.

Disponível em [plausible.cacic.dev.br](https://plausible.cacic.dev.br).

Use plsbl.cacic.dev.br para contornar bloqueadores de anúncios.

## Shlink (encurtador de links)

Serviço de encurtamento de links do CACiC.

Permite personalização OGP.

Disponível em [s.cacic.dev.br](https://shlink.cacic.dev.br).

## Traefik (proxy/roteamento)

Serviço de proxy reverso utilizado para roteamento de tráfego e gestão de certificados SSL.

O dashboard pode ser acessado em [traefik.cacic.dev.br/dashboard/](https://traefik.cacic.dev.br/dashboard/).

## Typesense (busca)

Serviço de busca de projetos do CACiC, como a [base de conhecimento do CACiC](https://cacic-fct.github.io/kb) e o [manual do calouro](https://cacic-fct.github.io/manual-do-calouro).

API disponível em [typesense.cacic.dev.br](https://typesense.cacic.dev.br).

## Uptime kuma (status page)

Página de estado dos serviços do CACiC.

Disponível em [status.cacic.dev.br](https://status.cacic.dev.br).

## Vaultwarden (senhas)

Gerenciador de senhas do CACiC.

Disponível em [senhas.cacic.dev.br](https://senhas.cacic.dev.br) para a unespNET.

:::danger

Todos que possuem acesso ao servidor também possuem acesso às senhas armazenadas no Vaultwarden.

:::
