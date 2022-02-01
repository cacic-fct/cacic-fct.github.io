### 2022.02.01.19.24
- Adicionado capas do Facebook na página dos calouros
- Página de transparência
    - Adicionado cards da recepção dos calouros
    - Adicionado lista de reuniões

### 2022.02.01.17.19
- Adicionado licença BSD-2 na página de licenças
- Adicionado lista de contribuidores na página "sobre este site"

### 2022.02.01.16.29.1
- Tabela de licenças atualizada

### 2022.02.01.16.29
- Adicionado manual do calouro ([#3](https://github.com/cacic-fct/cacic-fct/pull/3))
- Página dos calouros
    - Perguntas frequentes
        - Adicionado "Quando as aulas começam?"

### 2022.01.28.14.32
- Upgrade dos pacotes
- Página dos calouros
    - Alterado links do Facebook para Instagram, quando disponível
    - Adicionado cheerleading 

### 2022.01.28.11.40
- Imagens dos membros da chapa Margaret Hamilton
    - Comprimidas
    - Imagem do Willian atualizada com correções de brilho e cor
- Página dos calouros
    - Correção de gramática
    - Correção de formatação
    - Adicionado informação sobre cursos com currículo mínimo idêntico
    - Adicionado links para as leis e norma que impedem a matrícula 
    - Adicionado confete

### 2022.01.27.22.37
- Adicionado cabeçalho na árvore de arquivos
    - Logo e descrição do CACiC
- Adicionado fotos dos membros da chapa Margaret Hamilton
- Página dos calouros ([#2](https://github.com/cacic-fct/cacic-fct/pull/2))
	- Bem-vindo à Unesp!
		- Palavra de ordem "Universidade pública, gratuita e de qualidade"
		- Fala sobre o prestígio da Unesp
	- Tá, mas e agora?
		- Apresenta os primeiros passos que os calouros devem seguir
			- Matrícula virtual
			- Crie seu login institucional
			- Ativar todos os serviços de rede
			- Enviar o comprovante de vacinacão contra COVID-19
			- Fazer login no Google
			- Entrar no grupo dos calouros no WhatsApp e responder ao formulário de controle
	- Manual do calouro
		- Apenas faz menção, já que não está pronto ainda
	- Tenho dúvidas, com quem eu falo?
		- Com o CACiC por Instagram, Facebook, e-mail ou grupo do WhatsApp
	- Perguntas frequentes
		- Teremos aulas presenciais?
		- Quero concorrer a uma bolsa do Prouni, posso fazer matrícula?
		- Como cancelo minha matrícula?
		- Serviço militar obrigatório
		- A matrícula presencial é depois do início das aulas?
		- Onde encontro meus documentos da faculdade?
	- Grupos e páginas
		- CACiC
		- Facebook do Diretório Acadêmico
		- Facebook da EJComp
		- Facebook da Atlética
		- Facebook da Bateria Furiosa
		- Grupo do curso no Facebook
		- Grupo do câmpus no Facebook
		- Grupos de repúblicas
		- Grupos de aluguéis

### 2022.01.26.15.00
- Corrigido o botão de menu faltante nas páginas novas
- Os cards da página de links agora são criados dinamicamente 
- Renomeado card de "links úteis" para "acesso rápido" na página da pandemia
- Descrição do card de dezembro vermelho alterada para inverter "AIDS/HIV" para "HIV/AIDS"

### 2022.01.21.20.43
- Changelog e changelog de dados mescladas
- Adicionado texto em português no noscript
- Adicionado robots.txt
- Corrigido tabela de licenças apenas para softwares usados em production, antes estava com todos os softwares
- O conteúdo da página home foi movido para a página pandemia
- O conteúdo da página sobre foi movido para a página home
- Página sobre removida
- Página "sobre este app" agora possui os membros da chapa Margaret Hamilton
- Adicionado página árvore de links
    - Contém um link para o formulário de inscrição de uma plenária do MUP
- Menu lateral
    - Adicionado
        - Página da pandemia
        - Página da árvore de links
        - Página sobre este app
- Home
    - Adicionado
        - Componente da data
    - Alterado
        - Descrição "O CACiC" agora tem uma frase sobre eleição
- Removido "OnInit" sem uso nos componentes

### 2022.01.15.10.50
- Página inicial
    - Card com data do retorno do presencial
        - Texto consta como "Sem data definida."
    - Card de informações com as últimas ações da Unesp perante a pandemia
        - Adicionado
            - "INFO: O CACiC está aguardando a próxima reunião do conselho de curso"
            - "18/01 Fim do prazo para o cadastro do comprovante de vacinação"
            - "14/01 É disponibilizado, no SISGRAD, um espaço para o cadastro do comprovante de vacinação"
            - "12/01 Reitoria prorroga o retorno ao presencial para 6 de março"
            - "08/01 Reitoria torna obrigatório a paresentação do comprovante de vacinação"
    - Card com links úteis
        - Adicionado
            - Calendário do câmpus
            - Casos de COVID-19 em Prudente
            - Diretrizes para a reorganização das atividades
- Página de transparência
    - Gaveta com itens de repasses
        - Lista com um único item "Não há repasses"
    - Cards com feitos do CACiC
        - Adicionado
            - Envio do comprovante de vacinação
            - Regularização no conselho de curso
            - Dezembro vermelho
            - Campanha de rematrícula de calouros
            - Manutenção das mídias sociais
            - Hacktoberfest 2021
            - Processo eleitoral de 2021
- Página sobre
    - Breve descrição sobre o CACiC
    - Membros da chapa com ícones de placeholder
    - Botão "Sobre este site"
        - Nome do app
        - Versão do app
        - Versão dos dados
        - Copyright
        - Licenças
            - Copyright e disclaimer
            - Tabela com softwares usados em production gerada pelo license-report
            - Licenças Apache 2.0, 0-BSD e MIT
- Menu lateral
    - Botão das redes sociais (Instagram e Facebook) e mailto
    - Política de privacidade com [texto gerado aqui](https://www.blogson.com.br/gerador-de-politica-de-privacidade-lgpd/)
- Base para PWA (não funciona ainda)
    - Manifest
    - Instalação do service worker
    - Ícones
- Firebase
    - Hosting
    - Analytics
    - Inclusão dos pacotes "Authentication" e "Performance monitoring"