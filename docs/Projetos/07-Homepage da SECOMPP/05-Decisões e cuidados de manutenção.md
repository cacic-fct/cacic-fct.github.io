# Decisões e cuidados de manutenção

Esta página registra decisões que ajudam a evitar regressões em contribuições futuras.

## Tema claro

É necessário manter um tema claro, por questões de acessibilidade, independente de estética e da identidade visual do evento.

Algumas pessoas com astigmatismo ou com baixa visão podem ter dificuldade de leitura em temas escuros.

### Superfícies de marca

O conteúdo principal deve ser compatível com o tema claro.

Algumas partes do site podem ter tema escuro fixo, apenas para servirem como superfícies de marca, como o cabeçalho (hero), a navegação (navbar) e o rodapé (footer). Isso permite exibir logotipos que só estão disponíveis em cores escuras, como o da SECOMPP, sem prejudicar a leitura do conteúdo principal.

## Privacidade do usuário

Os rastroadores só devem carregar em produção e depois da validação de consentimento. O script local de carregamento consulta a sessão de rastreamento, lê os cookies de consentimento e só então injeta os rastreadores.

Não substitua esse fluxo por scripts externos carregados diretamente no layout. Isso quebraria o consentimento centralizado e dificultaria remover o rastreamento quando a pessoa revogar permissão.

O build precisa gerar o carregador de analytics antes do build do Astro. Se o processo de build mudar, preserve essa etapa.
