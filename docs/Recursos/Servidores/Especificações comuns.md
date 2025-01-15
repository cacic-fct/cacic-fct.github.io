# Especificações comuns

## Sistema operacional

Os servidores do CACiC devem rodar Debian Stable.

Apesar dos alunos estarem mais habituados com o Arch Linux ou Ubuntu, a filosofia e as diretrizes do Debian estão mais alinhados com as necessidades dos projetos da entidade:  
É um sistema [seguro](https://wiki.debian.org/WhyDebian#Security_and_Reliability) e [robusto, pronto OOTB](https://wiki.debian.org/DontBreakDebian) e que [necessita de poucas atualizações](https://www.debian.org/releases/) – a _major version_ só atualiza a cada 2 anos e é mantida por no mínimo 3 anos e o upgrade dificilmente quebra o SO.

O formato de _rolling release_ adotado pelo Arch Linux pode ser problemático, pois não há alguém fazendo manutenções constantes. O Fedora tem um problema parecido.

Diferente da Canonical (Ubuntu), os mantenedores do Debian são firmes com essas políticas e não sofrem pressão do mercado.

### Atualizações automáticas

Deve-se configurar o servidor para que os pacotes gerenciados pelo `apt` recebam atualizações automáticas diárias.

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
|                                                    |
| <ID>                                               |
| Leia a documentação em:                            |
| https://cacic.dev.br/docs/Recursos/Servidores/<ID> |
|                                                    |
 -----------------------------------------------------
```

## Formatação de disco

Os discos dos servidores linux do CACiC que não usem RAID devem estar formatados com BTRFS.

Em caso de qualquer tipo de RAID, devem estar formatados com ZFS. Não deve-se utilizar hardware RAID.

### SWAP

No mínimo o tamanho equivalente à RAM do servidor.

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

Em caso de impossibilidade, use obrigatoriamente o WireGuard.  
Não use Tailscale, CloudFlare WARP ou tecnologias similares.

### Servidores web

#### HTTPS

Todos os serviços devem aceitar conexões HTTP, para redirecioná-las permanentemente para HTTPS.

Também deve-se abrir para UDP as portas 80 (HTTP) e 443 (HTTPS), para utilização do protocolo HTTP/3.

#### Acessos

##### Direto por IP

Acessos diretos devem ser negados.

#### Por hostname da Unesp ou do CACiC

Deve redirecionar para a documentação do servidor.
