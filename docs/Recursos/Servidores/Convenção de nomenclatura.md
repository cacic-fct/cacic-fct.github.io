# Convenção de nomenclatura

Sempre que possível, use maiúsculas, para facilitar a leitura.

- Localização:
  - Se localizado na Unesp, deve conter a sigla da unidade, seguida pelo acrônimo do departamento ou diretoria:
    - `FCTDTI` - Faculdade de Ciências e Tecnologia, Diretoria Técnica de Informática;
    - `FCTDMC` - Faculdade de Ciências e Tecnologia, Departamento de Matemática e Computação.
  - Se localizado fora da rede da Unesp, deve conter o nome do responsável, seguido ou pela sigla do principal aeroporto próximo ou código da região. Se a localização exata for desconhecida, considere o aeroporto da capital do estado:
    - `PPB` - Presidente Prudente - SP;
    - `GRU` - São Paulo - SP.
- Tipo do servidor (3 letras):
  - `APP` - Servidor de aplicação;
  - `SQL` - Servidor de banco de dados;
  - `WEB` - Servidor web.
- Zona de acesso (1 letra):
  - `I` - Intranet Unesp;
  - `E` - Extranet Unesp (VPN);
  - `X` - Externo (internet).
- Ambiente (1 letra):
  - `D` - Desenvolvimento;
  - `S` - Staging (teste);
  - `P` - Produção.
- Número sequencial (2 dígitos)
  - Inicia em `01`;
  - Deve ser incrementado a cada novo servidor criado com o mesmo nome.

Exemplos:

- `FCTDTIWEBXP01` - Servidor web de produção da Diretoria Técnica de Informática, acessível pela internet.
- `AWSRICSQLXD02` - 2º Servidor de banco de dados de desenvolvimento da Amazon Web Services, localizado em `us-east-1` (Virginia), acessível pela internet.
- `FULANOPPBAPPD01` - Servidor de aplicação de desenvolvimento do "Fulano", localizado em Presidente Prudente, acessível pela internet.
