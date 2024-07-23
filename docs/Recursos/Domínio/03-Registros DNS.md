# Registros DNS

| Tipo    | Nome                     | Destino                | Proxy | Descrição                     |
| ------- | ------------------------ | ---------------------- | ----- | ----------------------------- |
| `A`     | cacic.dev.br             | GitHub Pages IPs       | Não   | GitHub Page                   |
| `AAAA`  | cacic.dev.br             | GitHub Pages IPs       | Não   | GitHub Page                   |
| `A`     | www                      | 192.0.2.1              | Sim   | Redirect to root              |
| `A`     | live                     | 192.0.2.1              | Sim   | Redirect to root/live         |
| `CNAME` | manual                   | cacic-fct.github.io    | Não   | GitHub Page                   |
| `CNAME` | secompp                  | cacic-fct.github.io    | Não   | GitHub Page                   |
| `CNAME` | sensores-lsn             | cacic-fct.github.io    | Não   | GitHub Page                   |
| `CNAME` | docs.fctapp.cacic.dev.br | fct-app-docs.pages.dev | Não   | Cloudflare Pages              |
| `CAA`   | letsencrypt.org          |                        | -     | Default certificate authority |

| Tipo  | Nome             | Conteúdo                                                                                     | Prioridade | Descrição              |
| ----- | ---------------- | -------------------------------------------------------------------------------------------- | ---------- | ---------------------- |
| `MX`  | cacic.dev.br     | route1.mx.cloudflare.net                                                                     | 39         | Email routing          |
| `MX`  | cacic.dev.br     | route2.mx.cloudflare.net                                                                     | 19         | Email routing          |
| `MX ` | cacic.dev.br     | route3.mx.cloudflare.net                                                                     | 76         | Email routing          |
| `TXT` | cacic.dev.br     | "v=spf1 include:\_spf.mx.cloudflare.net ~all"                                                |            | Email routing          |
| `TXT` | \_dmarc          | "v=DMARC1; p=none; rua=mailto:c492053d4043426db51c333e61dc665d@dmarc-reports.cloudflare.net" |            | DMARC Management       |
| `TXT` | \_gh-cacic-fct-o | db69e3dfe2                                                                                   |            | GitHub ownership       |
| `TXT` | cacic.dev.br     | google-site-verification=s43LWvB4dmj0SFpw46-5FxO411-p6wIV-HRarHdw-8I                         |            | Google ownership CACiC |
| `TXT` | cacic.dev.br     | google-site-verification=sY-Tck_HhGIkt_F11XIKTET0M4uVdJ-sgRfQD2Vs9a0                         |            | Google ownership Renan |

É indispensável a inclusão do registro `CAA` para cada um dos domínios que não estão com proxy, a fim de garantir a segurança dos certificados SSL.

Não usa-se subdomínios de subdomínios (`*.*.cacic.dev.br`), pois o Cloudflare não gera certificados SSL para eles quando o proxy está ativado.  
Para contornar isso, usa-se hífens no lugar dos pontos (`*-*.cacic.dev.br`).

:::note

Cada servidor possui uma tabela de registros própria, confira na documentação do servidor.

:::
