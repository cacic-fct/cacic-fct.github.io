# Especificações comuns

## Sistema operacional

Os servidores do CACiC devem rodar Debian Stable.

Apesar dos alunos estarem mais habituados com o Arch Linux ou Ubuntu, a filosofia e diretrizes do Debian estão mais alinhados com as necessidades dos projetos da entidade:  
É um sistema [seguro](https://wiki.debian.org/WhyDebian#Security_and_Reliability) e [robusto, pronto OOTB](https://wiki.debian.org/DontBreakDebian) e que [necessita de poucas atualizações](https://www.debian.org/releases/) – a major version só atualiza a cada 2 anos e é mantida por no mínimo 3 anos e o upgrade dificilmente quebra o SO.

O formato de Rolling Release adotado pelo Arch Linux pode ser problemático, pois não há alguém fazendo manutenções constantes. O Fedora tem um problema parecido.

Diferente da Canonical (Ubuntu), os mantenedores do Debian são firmes com essas políticas e não sofrem pressão do mercado.

### Configurações

#### SSH

- `MaxAuthTries 3`
- `DebianBanner no`
- `PermitRootLogin no`
- `Banner /etc/sshbanner`
- Autenticação por chave RSA:
  - `PasswordAuthentication no`
  - `ChallengeResponseAuthentication no`

##### /etc/sshbanner

```

Este servidor é gerenciado pelo CACiC,
com auxílio da <entidade que hospeda o servidor>.

Confira na documentação os usuários que possuem acesso
e como entrar em contato com eles.

```

#### /etc/motd

```

              ++
            ++ +++
         ++ +++++++
        ++ ++++++++++
      ++ +++++++++++++
    ++ ++++++++++++++++
   +++ ++++++++++++++ +++++       +++        +++++   +++    +++++
    ++ +++++++++++ +++++++++     +++++     +++++++++     +++++++++
   +++ +++++++++++ +++          +++ +++    +++       +++ +++
    ++ +++++++++++
   +++ ++++++++++  +++        +++     +++  +++       +++ +++
     ++ ++++++++   +++++++++ +++       +++ +++++++++ +++ +++++++++
      ++ ++++++    ++ +++++ +++         +++   +++++  +++    +++++
       ++  ++    +++
                    ++
                     ++
                      ++
                        ++++


 -----------------------------------------------------
|                                                     |
| <ID>                                                |
| Leia a documentação em:                             |
| https://cacic.dev.br/docs/Recursos/Servidores/<ID>/ |
|                                                     |
 -----------------------------------------------------
```

## Rede

### Abertura de portas

A abertura de portas é feita pela Diretoria Técnica de Informática (DTI) e deve ser solicitada por meio de um professor ou por meio de um funcionário do departamento.

#### Proibições

Não deve-se abrir portas para:

- SSH;
  - Use a VPN da Unesp.
- FTP, SMB ou qualquer outro protocolo de transferência de arquivos;
  - Use a VPN da Unesp ou uma instância Nextcloud.
- SMTP:
  - Conforme a portaria Unesp nº 372/2018;

### VPN

Use a VPN da Unesp para acessar os servidores hospedados na Unesp.

Em caso de impossibilidade, use o WireGuard.
