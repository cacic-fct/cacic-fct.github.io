# Convenção de nomenclatura

Sempre que possível, use maiúsculas, para facilitar a leitura.

- Localização:
  - Se localizado na Unesp, deve conter a sigla da unidade, seguida pelo acrônimo do departamento ou diretoria:
    - `FCT-DTI` - Faculdade de Ciências e Tecnologia, Diretoria Técnica de Informática;
    - `FCT-DMC` - Faculdade de Ciências e Tecnologia, Departamento de Matemática e Computação.
  - Se localizado fora da rede da Unesp, deve conter o nome do responsável, seguido pela sigla IATA do principal aeroporto próximo. Se o servidor está na região de Prudente, use o nome curto da cidade ao invés da sigla do aeroporto. Se a localização exata for desconhecida, considere o aeroporto da capital do estado. Se o provedor possui nome próprio para a região, use ele:
    - `PPB` - Presidente Prudente - SP;
    - `GRU` - São Paulo - SP;
    - `MARTINOPOLIS` - Martinópolis - SP.
    - `VENCESLAU` - Presidente Venceslau - SP.
    - `PIRAPO` - Pirapozinho - SP.
    - `USEAST1` - `us-east-1` - Virginia - AWS;
- Nome ou descrição do servidor, apenas se ela é amplamente utilizada pelos usuários, por exemplo:
  - `CLUSTER` - Cluster de servidores do Laboratório de Simulação Numérica (LSN), do DMC.
- Zona de acesso (1 letra):
  - `I` - Intranet Unesp;
  - `E` - Extranet Unesp (VPN);
  - `X` - Externo (internet).
- Número sequencial (2 dígitos)
  - Inicia em `01`;
  - Deve ser incrementado a cada novo servidor criado com o mesmo nome. Números antigos podem ser reutilizados caso o servidor seja desativado, desde que a documentação seja atualizada para refletir a mudança.

Exemplos:

- `FCT-DTI-X-01` - Servidor da Diretoria Técnica de Informática, acessível pela internet.
- `AWS-USEAST1-X-02` - 2º Servidor da Amazon Web Services, localizado em `us-east-1` (Virginia), acessível pela internet.
- `FULANO-PPB-X-01` - Servidor de "Fulano", localizado em Presidente Prudente, acessível pela internet.

## Repositório no GitHub

Se o servidor possui um repositório no GitHub, o nome do repositório deve seguir a mesma convenção de nomenclatura do servidor, com a adição do prefixo `server-`.
