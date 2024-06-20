# Registros DNS

| Tipo    | Nome                       | Destino             | Proxy | Descrição                     |
| ------- | -------------------------- | ------------------- | ----- | ----------------------------- |
| `A`     | fct.cacic.dev.br           | 200.145.181.38      | Sim   | Servidor da DTI               |
| `A`     | www                        | 192.0.2.1           | Sim   | Redirect to root              |
| `A`     | live                       | 192.0.2.1           | Sim   | Redirect to root/live         |
| `CNAME` | manual                     | cacic-fct.github.io | Não   | GH Pages                      |
| `CNAME` | secompp                    | cacic-fct.github.io | Não   | GH Pages                      |
| `CNAME` | fotos.cacic.dev.br         | fct.cacic.dev.br    | Sim   | Immich                        |
| `CNAME` | plausible.cacic.dev.br     | fct.cacic.dev.br    | Sim   | Analytics                     |
| `CNAME` | status.cacic.dev.br        | fct.cacic.dev.br    | Sim   | Status page                   |
| `CNAME` | highlight.cacic.dev.br     | fct.cacic.dev.br    | Sim   | Performance monitoring        |
| `CNAME` | api.highlight.cacic.dev.br | fct.cacic.dev.br    | Não   | Performance monitoring        |
| `CNAME` | typesense.cacic.dev.br     | fct.cacic.dev.br    | Sim   | Search engine                 |
| `CNAME` | renan                      | ppb.yudi.me         | Sim   | Temporary hosting             |
| `CAA`   | letsencrypt.org            |                     | -     | Default certificate authority |

É indispensável a inclusão do registro `CAA` para cada um dos domínios, a fim de garantir a segurança dos certificados SSL.

:::note

O FCT App possui uma [tabela de registros própria](https://docs.fctapp.cacic.dev.br/devops/infraestrutura/rede/dns/).

:::
