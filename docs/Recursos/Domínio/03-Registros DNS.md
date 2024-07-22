# Registros DNS

| Tipo    | Nome                     | Destino             | Proxy | Descrição                     |
| ------- | ------------------------ | ------------------- | ----- | ----------------------------- |
| `A`     | cacic.dev.br             | GitHub Pages IPs    | Não   | GH Pages                      |
| `AAAA`  | cacic.dev.br             | GitHub Pages IPs    | Não   | GH Pages                      |
| `A`     | www                      | 192.0.2.1           | Sim   | Redirect to root              |
| `A`     | live                     | 192.0.2.1           | Sim   | Redirect to root/live         |
| `CNAME` | manual                   | cacic-fct.github.io | Não   | GH Pages                      |
| `CNAME` | secompp                  | cacic-fct.github.io | Não   | GH Pages                      |
| `CNAME` | docs.fctapp.cacic.dev.br | cacic-fct.github.io | Não   |
| `CAA`   | letsencrypt.org          |                     | -     | Default certificate authority |

É indispensável a inclusão do registro `CAA` para cada um dos domínios que não estão com proxy, a fim de garantir a segurança dos certificados SSL.

Não usa-se subdomínios de subdomínios (`*.*.cacic.dev.br`), pois o Cloudflare não gera certificados SSL para eles quando o proxy está ativado.  
Para contornar isso, usa-se hífens no lugar dos pontos (`*-*.cacic.dev.br`).

:::note

Cada servidor possui uma tabela de registros própria, confira na documentação do servidor.

:::
