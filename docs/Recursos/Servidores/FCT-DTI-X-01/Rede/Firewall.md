---
title: Firewall
---

## Portas abertas

- 80 (HTTP) - TCP e UDP
- 443 (HTTPS) - TCP e UDP
- 22 (SSH) - TCP - Responde apenas a IPs da Unesp

A máquina não deve expor mais nenhuma porta para a internet.

## Tabela de regras

```
Chain INPUT (policy DROP)
target     prot opt source               destination
ACCEPT     all  --  anywhere             anywhere
ACCEPT     tcp  --  200.145.0.0/16       anywhere             tcp dpt:ssh
ACCEPT     tcp  --  186.217.0.0/16       anywhere             tcp dpt:ssh
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:http
ACCEPT     udp  --  anywhere             anywhere             udp dpt:80
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:https
ACCEPT     udp  --  anywhere             anywhere             udp dpt:https
ACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED
ACCEPT     icmp --  200.145.0.0/16       anywhere             icmp echo-request
ACCEPT     icmp --  186.217.0.0/16       anywhere             icmp echo-request
```

:::note

A permissão para responder pings originados do bloco `186.217.0.0/16` foi uma adição manual, que não está disponível no script de firewall da DTI.

Liberar uma porta no `iptables` não significa que ela estará exposta para a internet. [Solicite a abertura para a DTI](../../Especificações%20comuns.md#abertura-de-portas)

:::

Observe que o servidor apenas responde a requisições ICMP (ping) de dentro da unespNET.

## Peculiaridades

O servidor comunica-se com os dispositivos da intranet da FCT de maneira irrestrita.  
Dessa forma, ele pode ser utilizado como load balancer, para redirecionar requisições para servidores sem acesso direto à internet.
