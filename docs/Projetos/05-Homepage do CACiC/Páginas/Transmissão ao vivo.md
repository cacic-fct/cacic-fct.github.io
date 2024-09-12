# Transmissão ao vivo

A página também pode ser acessada pelo link [live.cacic.dev.br](https://live.cacic.dev.br).

Por padrão, a página exibe apenas o _feed_ principal de _live_ do canal do YouTube do CACiC.  
Se nenhuma _live_ estiver ocorrendo, a página exibirá um erro de "vídeo indisponível".

Se múltiplas transmissões estiverem ocorrendo ao mesmo tempo no canal do CACiC, a página exibirá apenas uma delas.

Para alterar a _live_, basta inserir o ID da transmissão no arquivo da página, que está localizado em `src/pages/live/index.tsx`.

Também é possível inserir canais da Twitch.

Multiplas transmissões podem ser exibidas simultaneamente.

Se há espelhamento de transmissão em plataformas diferentes, coloque apenas uma delas.
