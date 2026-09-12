import { translate } from '@docusaurus/Translate';

import type { DocSearchTranslations } from 'typesense-docsearch-react';

const translations: DocSearchTranslations & { placeholder: string } = {
  button: {
    buttonText: translate({
      id: 'theme.SearchBar.label',
      message: 'Buscar',
      description: 'The ARIA label and placeholder for the search button',
    }),
    buttonAriaLabel: translate({
      id: 'theme.SearchBar.label',
      message: 'Buscar',
      description: 'The ARIA label and placeholder for the search button',
    }),
  },
  modal: {
    searchBox: {
      resetButtonTitle: translate({
        id: 'theme.SearchModal.searchBox.resetButtonTitle',
        message: 'Limpar a busca',
        description: 'The label and ARIA label for the search box reset button',
      }),
      resetButtonAriaLabel: translate({
        id: 'theme.SearchModal.searchBox.resetButtonTitle',
        message: 'Limpar a busca',
        description: 'The label and ARIA label for the search box reset button',
      }),
      cancelButtonText: translate({
        id: 'theme.SearchModal.searchBox.cancelButtonText',
        message: 'Cancelar',
        description:
          'The label and ARIA label for the search box cancel button',
      }),
      cancelButtonAriaLabel: translate({
        id: 'theme.SearchModal.searchBox.cancelButtonText',
        message: 'Cancelar',
        description:
          'The label and ARIA label for the search box cancel button',
      }),
    },
    startScreen: {
      recentSearchesTitle: translate({
        id: 'theme.SearchModal.startScreen.recentSearchesTitle',
        message: 'Buscas recentes',
        description: 'The title for recent searches',
      }),
      noRecentSearchesText: translate({
        id: 'theme.SearchModal.startScreen.noRecentSearchesText',
        message: 'Sem buscas recentes',
        description: 'The text displayed when there are no recent searches',
      }),
      saveRecentSearchButtonTitle: translate({
        id: 'theme.SearchModal.startScreen.saveRecentSearchButtonTitle',
        message: 'Salvar esta busca recente',
        description: 'The label for the button that saves a recent search',
      }),
      removeRecentSearchButtonTitle: translate({
        id: 'theme.SearchModal.startScreen.removeRecentSearchButtonTitle',
        message: 'Remover esta busca do histórico',
        description: 'The label for the button that removes a recent search',
      }),
      favoriteSearchesTitle: translate({
        id: 'theme.SearchModal.startScreen.favoriteSearchesTitle',
        message: 'Buscas favoritas',
        description: 'The title for favorite searches',
      }),
      removeFavoriteSearchButtonTitle: translate({
        id: 'theme.SearchModal.startScreen.removeFavoriteSearchButtonTitle',
        message: 'Remover esta busca dos favoritos',
        description: 'The label for the button that removes a favorite search',
      }),
    },
    errorScreen: {
      titleText: translate({
        id: 'theme.SearchModal.errorScreen.titleText',
        message: 'Não foi possível carregar os resultados.',
        description: 'The title for the error screen of the search modal',
      }),
      helpText: translate({
        id: 'theme.SearchModal.errorScreen.helpText',
        message: 'Verifique sua conexão com a internet.',
        description: 'The help text for the error screen of the search modal',
      }),
    },
    footer: {
      selectText: translate({
        id: 'theme.SearchModal.footer.selectText',
        message: 'para selecionar',
        description: 'The explanatory text of the action for the Enter key',
      }),
      selectKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.selectKeyAriaLabel',
        message: 'Tecla Enter',
        description:
          'The ARIA label for the Enter key button that makes the selection',
      }),
      navigateText: translate({
        id: 'theme.SearchModal.footer.navigateText',
        message: 'para navegar',
        description:
          'The explanatory text of the action for the Arrow up and Arrow down keys',
      }),
      navigateUpKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.navigateUpKeyAriaLabel',
        message: 'Seta para cima',
        description:
          'The ARIA label for the Arrow up key button used for navigation',
      }),
      navigateDownKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.navigateDownKeyAriaLabel',
        message: 'Seta para baixo',
        description:
          'The ARIA label for the Arrow down key button used for navigation',
      }),
      closeText: translate({
        id: 'theme.SearchModal.footer.closeText',
        message: 'para fechar',
        description: 'The explanatory text of the action for the Escape key',
      }),
      closeKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.closeKeyAriaLabel',
        message: 'Tecla ESC',
        description:
          'The ARIA label for the Escape key button that closes the modal',
      }),
      searchByText: translate({
        id: 'theme.SearchModal.footer.searchByText',
        message: 'Buscar por',
        description:
          'The text explaining that the search is performed by Algolia',
      }),
    },
    noResultsScreen: {
      noResultsText: translate({
        id: 'theme.SearchModal.noResultsScreen.noResultsText',
        message: 'Sem resultados para',
        description:
          'The text explaining that there are no results for the following search',
      }),
      suggestedQueryText: translate({
        id: 'theme.SearchModal.noResultsScreen.suggestedQueryText',
        message: 'Tente buscar por',
        description:
          'The text for the suggested query when no results are found for the following search',
      }),
      reportMissingResultsText: translate({
        id: 'theme.SearchModal.noResultsScreen.reportMissingResultsText',
        message: 'Achou que faltam resultados?',
        description:
          'The text for the question where the user thinks there are missing results',
      }),
      reportMissingResultsLinkText: translate({
        id: 'theme.SearchModal.noResultsScreen.reportMissingResultsLinkText',
        message: 'Informe-nos.',
        description: 'The text for the link to report missing results',
      }),
    },
  },
  placeholder: translate({
    id: 'theme.SearchModal.placeholder',
    message: 'Buscar',
    description: 'The placeholder of the input of the DocSearch pop-up modal',
  }),
};

export default translations;
