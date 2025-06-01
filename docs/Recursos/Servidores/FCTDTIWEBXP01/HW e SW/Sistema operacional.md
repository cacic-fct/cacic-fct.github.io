---
title: Sistema operacional
---

## Especificações gerais

Debian Stable, conforme [especificações comuns](../../Especificações%20comuns.md).

### Usuários

Conforme norma da Unesp, cada pessoa possui seu próprio usuário.\*

- [dti](https://www.fct.unesp.br/#!/informatica/sobre-o-sti/) (1000)
- [fernando](https://www.fct.unesp.br/#!/departamentos/matematica-e-computacao/estrutura-administrativa/) (1001)
- [guibatalhoti](https://github.com/guibatalhoti) (1002)
- [willshobwish](https://github.com/willshobwish) (1003)
- [danielserezane](https://github.com/salies) (1004)
- [renanyudi](https://github.com/yudi) (1005)

\*Configurado pela DTI.

Todos os usuários possuem a senha `unesp#2024`, que não deve ser alterada.

Conforme [normas da Unesp](https://www2.unesp.br/portal#!/ai/regulamentos-e-normas16359/), se o acesso é remoto, não é permitido login com `root`, nem execução de comandos com `sudo` (permissão de root). No entanto, os usuários dos estudantes foram adicionados ao grupo `sudo` pela DTI.

Os usuários também foram adicionados ao grupo `docker`, para não ser necessário executar os comandos com `sudo`.

### Pacote Docker

Enquanto não for disponibilizado um pacote Docker com o Compose v2 no repositório do Debian, deve-se instala-lo diretamente do repositório oficial do Docker.

### Backup

Enquanto uma solução de backup permanente não é implementada, o backup é feito manualmente.

No diretório `/home/shared`, os arquivos `*-backup.zpaq` são incrementados com os comandos:

```bash
sudo zpaqfranz a "/home/shared/docker-compose-backup.???.zpaq" /home/shared/docker-compose -index "/home/shared/docker-compose-backup.000.zpaq" -filelist

sudo zpaqfranz a "/home/shared/docker-data-backup.???.zpaq" /home/shared/docker-data -index "/home/shared/docker-data-backup.000.zpaq" -filelist
```

Estes comandos deve ser executados com permissões elevadas, por conta das permissões dos arquivos do Docker.

Não delete os arquivos de números inferiores (antigos), pois eles são necessários para a restauração.

Os arquivo são, então, movidos para o servidor de [Yudi](https://github.com/Yudi).

## Configurações

### Agendamento de tarefas

- **23:00** - Início do backup
- **02:00–02:15** - Atualização da lista de pacotes
- **03:00** - Atualização dos pacotes
- **05:00** - Reinicialização do sistema, se necessário

Os intervalos consideram que o servidor demora bastante para executar as tarefas.

### ZRam

Para que o sistema utilize o ZRam corretamente, a partição de swap deve possuir a opção `pri=2` no lugar do `sw`.

Referência:  
https://makedebianfunagainandlearnhowtodoothercoolstufftoo.computer/doku.php?id=start:zramswap  
Acesso em 2024-07-14.

#### /etc/default/zramswap

```bash
# Compression algorithm selection
# speed: lz4 > zstd > lzo
# compression: zstd > lzo > lz4
# This is not inclusive of all that is available in latest kernels
# See /sys/block/zram0/comp_algorithm (when zram module is loaded) to see
# what is currently set and available for your kernel[1]
# [1]  https://github.com/torvalds/linux/blob/master/Documentation/blockdev/zram.txt#L86
ALGO=lz4

# Specifies the amount of RAM that should be used for zram
# based on a percentage the total amount of available memory
# This takes precedence and overrides SIZE below
PERCENT=90

# Specifies a static amount of RAM that should be used for
# the ZRAM devices, this is in MiB
#SIZE=8192

# Specifies the priority for the swap devices, see swapon(2)
# for more details. Higher number = higher priority
# This should probably be higher than hdd/ssd swaps.
PRIORITY=100
```

### Unattended upgrades

#### /etc/apt/apt.conf.d/50unattended-upgrades

Além das configurações padrão, foi adicionado o repositório do Docker e configurado o horário de reinicialização.

```
Unattended-Upgrade::Origins-Pattern {
  ...
        "origin=Debian,codename=${distro_codename},label=Debian";
        "origin=Debian,codename=${distro_codename},label=Debian-Security";
        "origin=Debian,codename=${distro_codename}-security,label=Debian-Security";
        "origin=Docker,codename=${distro_codename}/stable,archive=${distro_codename},label=Docker,component=stable";
  ...
}

Unattended-Upgrade::Automatic-Reboot-Time "05:00";
```

#### `sudo systemctl edit apt-daily.timer`

```
[Timer]
OnCalendar=
OnCalendar=02:00
RandomizedDelaySec=15m
```

#### `sudo systemctl edit apt-daily-upgrade.timer`

```
[Timer]
OnCalendar=
OnCalendar=03:00
RandomizedDelaySec=0
```

Referência:  
https://unix.stackexchange.com/a/541431  
Acesso em 2024-07-16.
