---
title: Lista de serviços
---

O servidor do CACiC Event Manager também hospeda outros serviços utilizados pelo CACiC.

## Serviços próprios do CACiC

### CACiC Account Manager

Serviço de gerenciamento de contas do CACiC, utilizado para autenticação em outros serviços do CACiC, com integração ao Keycloak.

Disponível em [account.cacic.com.br](https://account.cacic.com.br).

### CACiC Event Manager

Antigo FCT App.

Disponível em [eventos.cacic.com.br](https://fctapp.cacic.com.br).

### Gerador de e-mails

Disponível em [emails.cacic.com.br](https://emails.cacic.com.br).

### Error pages

Disponível como middleware do Traefik.

## Authentik (autenticação)

Utilizado para autenticação comum entre os serviços do CACiC.

Deve-se fazer login com a conta Google.

Disponível em [auth.cacic.com.br](https://auth.cacic.com.br).

Acesse [email-authentication-flow](https://auth.cacic.com.br/if/flow/email-authentication-flow/) para login com e-mail e senha.

O Authentik é mais simples que o Keyclock para usos internos.

## Keycloak (autenticação)

Também conhecido como CACiC SSO.
Utilizado para autenticação em servíços públicos do CACiC, como o CACiC Event Manager.

Como usuário, deve-se fazer login com a conta Google.  
Como administrador, deve-se solicitar permissão de acesso ao Keycloak para um dos encarregados do servidor.

Disponível em [sso.cacic.com.br](https://sso.cacic.com.br).

## Crowdsec

Serviço de proteção contra ataques de rede.

## Grafana (painel de monitoramento)

Painel de monitoramento do CACiC.

Disponível em [grafana.cacic.com.br](https://grafana.cacic.com.br).

## Glitchtip (monitoramento)

Platforma de monitoramento de erros e performance de projetos do CACiC.

Disponível em [glitchtip.cacic.com.br](https://glitchtip.cacic.com.br).

## Immich (fotos)

Serviço de armazenamento de fotos do CACiC, utilizado para divulgação de álbuns de eventos acadêmicos.

Disponível em [fotos.cacic.com.br](https://fotos.cacic.com.br) para a unespNET.

## Infisical (segredos)

Serviço de armazenamento de segredos do CACiC.

Disponível em [secrets.cacic.com.br](https://secrets.cacic.com.br) para a unespNET.

:::danger

Todos que possuem acesso ao servidor também possuem acesso aos segredos armazenados no Infisical.

:::

## Mailcatcher ("fake" SMTP)

Serviço de SMTP utilizado para testes de envio de e-mails.

Servidor disponível em `mailcatcher:1025` na rede Docker `smtp` e `traefik`.  
Caixa de entrada disponível em [smtp.cacic.com.br](https://smtp.cacic.com.br).

## Umami (analytics)

Serviço de análise do CACiC.

Substitui o Google Analytics.

Disponível em [analytics.cacic.com.br](https://analytics.cacic.com.br).

Use a.cacic.com.br para contornar bloqueadores de anúncios.

## Shlink (encurtador de links)

Serviço de encurtamento de links do CACiC.

Permite personalização OGP.

Disponível em [s.cacic.com.br](https://shlink.cacic.com.br).

## Traefik (proxy/roteamento)

Serviço de proxy reverso utilizado para roteamento de tráfego e gestão de certificados SSL.

O dashboard pode ser acessado em [traefik.cacic.com.br/dashboard/](https://traefik.cacic.com.br/dashboard/).

## Typesense (busca)

Serviço de busca de projetos do CACiC, como a [base de conhecimento do CACiC](https://cacic-fct.github.io/kb) e o [manual do calouro](https://cacic-fct.github.io/manual-do-calouro).

API disponível em [typesense.cacic.com.br](https://typesense.cacic.com.br).

## Uptime kuma (status page)

Página de estado dos serviços do CACiC.

Disponível em [status.cacic.com.br](https://status.cacic.com.br).

## Vaultwarden (senhas)

Gerenciador de senhas do CACiC.

Disponível em [senhas.cacic.com.br](https://senhas.cacic.com.br) para a unespNET.

:::danger

Todos que possuem acesso ao servidor também possuem acesso às senhas armazenadas no Vaultwarden.

:::
