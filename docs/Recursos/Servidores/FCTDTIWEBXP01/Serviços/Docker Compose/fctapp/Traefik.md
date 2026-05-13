---
title: Traefik
---

<!-- TODO: Atualizar -->

O Traefik é usado para a gestão de certificados SSL e roteamento de tráfego.

### SSL

O Traefik é responsável por gerar e renovar os certificados SSL automaticamente por meio do do Let's Encrypt.

### Middlewares

#### Redirecionamento HTTP

Todo o tráfego HTTP é redirecionado para HTTPS. Isso é feito por meio do middleware `fctapp-insecure-mw`.

#### Rate limit

A quantidade de requisições por IP é limitada para evitar ataques automatizados. Isso é feito por meio do middleware `fctapp-mw-ratelimit`.

#### Headers

Headers de segurança são usados para evitar ataques XSS e Clickjacking. Isso é feito por meio do middleware `fctapp-mw-securityheaders`.

São headers necessários:

- `STSSeconds`
- `STSIncludeSubdomains`
- `STSPreload`
- `forceSTSHeader`
- `X-Forwarded-Proto: https`
- `contentTypeNosniff`
- `browserXssFilter`
- `frameDeny`
- `permissionsPolicy: camera=(self), clipboard-read=(self), clipboard-write=(self)` - Permissões para acessar a câmera e a área de transferência do usuário.

#### Privacidade do usuário

Headers de privacidade são usados para evitar rastreamento por terceiros. Isso é feito por meio do middleware `fctapp-mw-securityheaders`.

- `referrerPolicy: same-origin` - Não enviar o header `Referer` para outros sites, apenas para site do FCT App.
