# Registros

| Tipo    | Nome                       | Destino             | Proxy | Descrição                     |
| ------- | -------------------------- | ------------------- | ----- | ----------------------------- |
| `A`     | cacic.dev.br               | GitHub Pages IPs    | Não   | GH Pages                      |
| `AAAA`  | cacic.dev.br               | GitHub Pages IPs    | Não   | GH Pages                      |
| `A`     | www                        | 192.0.2.1           | Sim   | Redirect to root              |
| `A`     | live                       | 192.0.2.1           | Sim   | Redirect to root/live         |
| `CNAME` | manual                     | cacic-fct.github.io | Não   | GH Pages                      |
| `CNAME` | secompp                    | cacic-fct.github.io | Não   | GH Pages                      |
| `CNAME` | fct.cacic.dev.br           | 38a.fct.unesp.br    | Sim   | Servidor da DTI               |
| `CNAME` | fotos.cacic.dev.br         | fct.cacic.dev.br    | Sim   | Immich                        |
| `CNAME` | status.cacic.dev.br        | fct.cacic.dev.br    | Sim   | Uptime kuma                   |
| `CNAME` | traefik.cacic.dev.br       | fct.cacic.dev.br    | Sim   | Dashboard                     |
| `CNAME` | auth.cacic.dev.br          | fct.cacic.dev.br    | Sim   | Authentik                     |
| `CNAME` | plausible.cacic.dev.br     | fct.cacic.dev.br    | Sim   | Analytics                     |
| `CNAME` | highlight.cacic.dev.br     | fct.cacic.dev.br    | Sim   | Performance monitoring        |
| `CNAME` | api-highlight.cacic.dev.br | fct.cacic.dev.br    | Sim   | Performance monitoring        |
| `CNAME` | typesense.cacic.dev.br     | fct.cacic.dev.br    | Sim   | Search engine                 |
| `CAA`   | letsencrypt.org            |                     | -     | Default certificate authority |

É indispensável a inclusão do registro `CAA` para cada um dos domínios, a fim de garantir a segurança dos certificados SSL.

:::note

O FCT App possui uma [tabela de registros própria](https://docs.fctapp.cacic.dev.br/devops/infraestrutura/rede/dns/).

:::
