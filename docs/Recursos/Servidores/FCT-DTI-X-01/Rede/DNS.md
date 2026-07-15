---
title: DNS
---

O DNS é gerenciado pelo CACiC.

A entidade deve adotar práticas de segurança para proteger o acesso às configurações do DNS, de modo a evitar ataques de sequestro ou _spoofing_. Além disso, deve facilitar o debugging.  
Dessa forma:

- O DNSSEC deve ser habilitado;
- Não deve-se utilizar registros com _wildcards_;

## Tabela de registros

Esta tabela é um adendo à [tabela principal](../../../Domínio/03-Registros%20DNS.md).

| Tipo    | Nome                      | Destino                   | Proxy |                                       |
| ------- | ------------------------- | ------------------------- | ----- | ------------------------------------- |
| `CNAME` | auth.cacic.com.br         | FCT-DTI-X-01.cacic.com.br | Sim   | Authentik                             |
| `CNAME` | cal.cacic.com.br          | FCT-DTI-X-01.cacic.com.br | Sim   | Calendário                            |
| `CNAME` | dashboard.cacic.com.br    | FCT-DTI-X-01.cacic.com.br | Sim   | Beszel                                |
| `CNAME` | emails.cacic.com.br       | FCT-DTI-X-01.cacic.com.br | Sim   | Projeto email templates               |
| `CNAME` | fctapp.cacic.com.br       | FCT-DTI-X-01.cacic.com.br | Sim   |                                       |
| `CNAME` | FCT-DTI-X-01.cacic.com.br | 38a.fct.unesp.br          | Sim   | Servidor da DTI                       |
| `CNAME` | fotos.cacic.com.br        | FCT-DTI-X-01.cacic.com.br | Sim   | Immich                                |
| `CNAME` | glitchtip.cacic.com.br    | FCT-DTI-X-01.cacic.com.br | Sim   | Error monitoring                      |
| `CNAME` | grafana.cacic.com.br      | FCT-DTI-X-01.cacic.com.br | Sim   | Monitoring                            |
| `CNAME` | analytics.cacic.com.br    | FCT-DTI-X-01.cacic.com.br | Sim   | Analytics                             |
| `CNAME` | a.cacic.com.br            | FCT-DTI-X-01.cacic.com.br | Sim   | Analytics - Alternativa adblock       |
| `CNAME` | analytics.cacic.com.br    | FCT-DTI-X-01.cacic.com.br | Sim   | Umami Analytics                       |
| `CNAME` | a.cacic.com.br            | FCT-DTI-X-01.cacic.com.br | Sim   | Umami Analytics - Alternativa adblock |
| `CNAME` | s.cacic.com.br            | FCT-DTI-X-01.cacic.com.br | Sim   | Shlink                                |
| `CNAME` | secrets.cacic.com.br      | FCT-DTI-X-01.cacic.com.br | Sim   | Infisical                             |
| `CNAME` | senhas.cacic.com.br       | FCT-DTI-X-01.cacic.com.br | Sim   | Vaultwarden                           |
| `CNAME` | smtp.cacic.com.br         | FCT-DTI-X-01.cacic.com.br | Sim   | Mailcatcher                           |
| `CNAME` | status.cacic.com.br       | FCT-DTI-X-01.cacic.com.br | Sim   | Uptime kuma                           |
| `CNAME` | traefik.cacic.com.br      | FCT-DTI-X-01.cacic.com.br | Sim   | Dashboard                             |
| `CNAME` | typesense.cacic.com.br    | FCT-DTI-X-01.cacic.com.br | Sim   | Search engine                         |
| `CNAME` | watchtower.cacic.com.br   | FCT-DTI-X-01.cacic.com.br | Sim   |                                       |

Mesmo que esta tabela indique o endereço do servidor, todos os registros que apontam para o domínio `FCT-DTI-X-01.cacic.com.br` devem estar protegidos pelo proxy do Cloudflare. Isso é necessário para impedir ataques externos automatizados.

## Configurações do CloudFlare

Para que o caching do service worker funcione, o CloudFlare não pode injetar conteúdo no HTML da página do front end. Uma regra específica deve ser feita para impedir isso:

```
(http.host eq "fctapp.cacic.com.br")
```

- Auto Minify - Off
- Browser Integrity Check - On
- Disable Apps
- Disable Zaraz
- Email Obfuscation - Off
- Opportunist Encryption - On
- Rocket Loader - Off
