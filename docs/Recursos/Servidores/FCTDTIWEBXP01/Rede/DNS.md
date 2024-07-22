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

| Tipo    | Nome                                   | Destino                    | Proxy |                        |
| ------- | -------------------------------------- | -------------------------- | ----- | ---------------------- |
| `CNAME` | FCTDTIWEBXP01.cacic.dev.br             | 38a.fct.unesp.br           | Sim   | Servidor da DTI        |
| `CNAME` | fctapp.cacic.dev.br                    | FCTDTIWEBXP01.cacic.dev.br | Sim   |                        |
| `CNAME` | supabase-fctapp.cacic.dev.br           | FCTDTIWEBXP01.cacic.dev.br | Sim   |                        |
| `CNAME` | analytics-supabase-fctapp.cacic.dev.br | FCTDTIWEBXP01.cacic.dev.br | Sim   |                        |
| `CNAME` | watchtower.cacic.dev.br                | FCTDTIWEBXP01.cacic.dev.br | Sim   |                        |
| `CNAME` | fotos.cacic.dev.br                     | FCTDTIWEBXP01.cacic.dev.br | Sim   | Immich                 |
| `CNAME` | status.cacic.dev.br                    | FCTDTIWEBXP01.cacic.dev.br | Sim   | Uptime kuma            |
| `CNAME` | s.cacic.dev.br                         | FCTDTIWEBXP01.cacic.dev.br | Sim   | Shlink                 |
| `CNAME` | senhas.cacic.dev.br                    | FCTDTIWEBXP01.cacic.dev.br | Sim   | Vaultwarden            |
| `CNAME` | auth.cacic.dev.br                      | FCTDTIWEBXP01.cacic.dev.br | Sim   | Authentik              |
| `CNAME` | traefik.cacic.dev.br                   | FCTDTIWEBXP01.cacic.dev.br | Sim   | Dashboard              |
| `CNAME` | plausible.cacic.dev.br                 | FCTDTIWEBXP01.cacic.dev.br | Sim   | Analytics              |
| `CNAME` | highlight.cacic.dev.br                 | FCTDTIWEBXP01.cacic.dev.br | Sim   | Performance monitoring |
| `CNAME` | api-highlight.cacic.dev.br             | FCTDTIWEBXP01.cacic.dev.br | Sim   | Performance monitoring |
| `CNAME` | typesense.cacic.dev.br                 | FCTDTIWEBXP01.cacic.dev.br | Sim   | Search engine          |

Mesmo que esta tabela indique o endereço do servidor, todos os registros que apontam para o domínio `FCTDTIWEBXP01.cacic.dev.br` devem estar protegidos pelo proxy do Cloudflare. Isso é necessário para impedir ataques externos automatizados.

## Configurações do CloudFlare

Para que o caching do service worker funcione, o CloudFlare não pode injetar conteúdo no HTML da página do front end. Uma regra específica deve ser feita para impedir isso:

```
(http.host eq "fctapp.cacic.dev.br")
```

- Auto Minify - Off
- Browser Integrity Check - On
- Disable Apps
- Disable Zaraz
- Email Obfuscation - Off
- Opportunist Encryption - On
- Rocket Loader - Off
