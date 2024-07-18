# Registros

| Tipo    | Nome                       | Destino                    | Proxy | Descrição                     |
| ------- | -------------------------- | -------------------------- | ----- | ----------------------------- |
| `A`     | cacic.dev.br               | GitHub Pages IPs           | Não   | GH Pages                      |
| `AAAA`  | cacic.dev.br               | GitHub Pages IPs           | Não   | GH Pages                      |
| `A`     | www                        | 192.0.2.1                  | Sim   | Redirect to root              |
| `A`     | live                       | 192.0.2.1                  | Sim   | Redirect to root/live         |
| `CNAME` | manual                     | cacic-fct.github.io        | Não   | GH Pages                      |
| `CNAME` | secompp                    | cacic-fct.github.io        | Não   | GH Pages                      |
| `CNAME` | FCTDTIWEBXP01.cacic.dev.br | 38a.fct.unesp.br           | Sim   | Servidor da DTI               |
| `CNAME` | fotos.cacic.dev.br         | FCTDTIWEBXP01.cacic.dev.br | Sim   | Immich                        |
| `CNAME` | status.cacic.dev.br        | FCTDTIWEBXP01.cacic.dev.br | Sim   | Uptime kuma                   |
| `CNAME` | s.cacic.dev.br             | FCTDTIWEBXP01.cacic.dev.br | Sim   | Shlink                        |
| `CNAME` | senhas.cacic.dev.br        | FCTDTIWEBXP01.cacic.dev.br | Sim   | Vaultwarden                   |
| `CNAME` | auth.cacic.dev.br          | FCTDTIWEBXP01.cacic.dev.br | Sim   | Authentik                     |
| `CNAME` | traefik.cacic.dev.br       | FCTDTIWEBXP01.cacic.dev.br | Sim   | Dashboard                     |
| `CNAME` | plausible.cacic.dev.br     | FCTDTIWEBXP01.cacic.dev.br | Sim   | Analytics                     |
| `CNAME` | highlight.cacic.dev.br     | FCTDTIWEBXP01.cacic.dev.br | Sim   | Performance monitoring        |
| `CNAME` | api-highlight.cacic.dev.br | FCTDTIWEBXP01.cacic.dev.br | Sim   | Performance monitoring        |
| `CNAME` | typesense.cacic.dev.br     | FCTDTIWEBXP01.cacic.dev.br | Sim   | Search engine                 |
| `CAA`   | letsencrypt.org            |                            | -     | Default certificate authority |

É indispensável a inclusão do registro `CAA` para cada um dos domínios, a fim de garantir a segurança dos certificados SSL.

Mesmo que esta tabela indique o endereço do servidor, todos os registros que apontam para o domínio `FCTDTIWEBXP01.cacic.dev.br` devem estar protegidos pelo proxy do Cloudflare. Isso é necessário para impedir ataques externos automatizados.

Não usa-se subdomínios de subdomínios (`*.*.cacic.dev.br`), pois o Cloudflare não gera certificados SSL para eles quando o proxy está ativado.  
Para contornar isso, usa-se hífens no lugar dos pontos (`*-*.cacic.dev.br`).

:::note

O FCT App possui uma [tabela de registros própria](https://docs.fctapp.cacic.dev.br/devops/infraestrutura/rede/dns/).

:::
