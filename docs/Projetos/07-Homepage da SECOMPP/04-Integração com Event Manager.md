# Integração com o CACiC Event Mananger

O CACiC Event Manager é a plataforma de gerenciamento de eventos utilizada na SECOMPP para organização do evento.

O sistema expõe uma API GraphQL que permite acessar as informações dos eventos, como nome, data, local e descrição. Para integração com a homepage, use as operações com o prefixo "Public".

Confira a documentação em https://eventos.cacic.dev.br/api

## Integração

A homepage consome apenas dados públicos do CACiC Event Manager. Não deve depender de sessão do usuário, token administrativo ou endpoints internos para obter programação, datas ou preços.

Usa-se `client:load` onde há chamadas GraphQL para evitar que o build estático congele o estado do site. Isso permite que alterações publicadas no sistema apareçam no site sem novo deploy.

Em desenvolvimento local, a URL `/event-manager-api/graphql` passa pelo proxy do Astro para a API pública de produção, por conta de CORS.

Mantenha as queries pequenas e orientadas ao que a página realmente exibe. Antes de adicionar um campo GraphQL, confirme onde ele será usado na tela. Antes de remover um campo, confira a transformação dos eventos, os cards de preço e o modal de detalhes.

O identificador do Major Event fica centralizado no cliente do Event Manager. Esse é o ponto esperado de atualização entre edições da SECOMPP; não espalhe ids do evento em componentes.

## Regras da programação

A programação da homepage representa apenas `MINICURSO` e `PALESTRA`. Outros tipos vindos do Event Manager são ignorados de propósito, porque a SECOMPP possui, em tese, apenas esses dois tipos de atividade.

Os dias exibidos vêm do intervalo do Major Event, não apenas das atividades cadastradas. Isso preserva dias sem atividade publicada e evita que a grade mude de tamanho enquanto a programação ainda está sendo montada.

Todas as datas e horários do evento são interpretados em `America/Sao_Paulo`. O código usa chaves de data para não deixar conversões de fuso deslocarem atividades para o dia errado.

Para minicursos, a homepage agrupa por local e encurta nomes no primeiro `" - "`. Use esse padrão ao cadastrar locais no Event Manager quando quiser títulos estáveis como laboratório, sala ou auditório.

## Valores de inscrição

Os valores vêm do Major Event no Event Manager e são tratados como centavos. Quando o evento não exige pagamento, o site mostra a inscrição como gratuita. Quando pagamento está habilitado mas não há faixa cadastrada, o site mostra que o valor ainda não foi cadastrado.

O card de participação livre (gratuita) é intencionalmente fixo.
