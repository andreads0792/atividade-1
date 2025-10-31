🎓 ONG Transformando Vidas: Single Page Application (SPA)

I. 🎯 Visão Geral do Projeto
Este projeto é uma atividade de desenvolvimento front-end que visa implementar uma Single Page Application (SPA) responsiva para uma Organização Não Governamental (ONG). O foco principal é demonstrar o domínio de arquitetura modular, Design System, e a aplicação correta de padrões modernos de HTML5, CSS3 (com ênfase em Flexbox/Grid e responsividade) e JavaScript (ES6 Modules).O resultado é um website dinâmico com navegação instantânea e um formulário de doação interativo.



II. 🛠️ Tecnologias e Arquitetura
HTML5 Semântico: Estrutura base (index.html) com foco em acessibilidade e uso correto de tags como <header>, <main>, <footer> e aria-label.CSS3 e Design System: Implementação de um Design System completo com variáveis CSS e layout moderno (Flexbox/Grid).JavaScript (ES6 Modules): Separação de responsabilidades utilizando type="module" para a lógica de SPA, interatividade e manipulação de DOM.

📦 Estrutura de Pastas

O projeto segue um padrão de modularidade e separação de responsabilidades:

├── index.html          # Shell da SPA e Ponto de Entrada Principal
├── README.md           # Documentação e Entrega
├── css/
│   └── main.css        # Contém o Design System, Layout, e Componentes
└── js/
    ├── main.js         # Orquestrador, Listener Global de Menu Mobile
    └── modules/
        ├── spa.js      # Lógica de Roteamento (Hash) e Templates de Página
        └── forms.js    # Lógica de Formulário, Validação e Atualização Dinâmica de Meta



III. 🚀 Como Visualizar o Projeto (Instruções Cruciais)

ATENÇÃO: Para que o código funcione corretamente, é obrigatório o uso de um servidor web local.
Módulos JavaScript (type="module") falham devido a restrições de segurança (CORS) ao abrir o index.html diretamente via file:///.
1. Usando a Extensão Live Server (Recomendado - VS Code)
Instale a extensão Live Server no Visual Studio Code.

Clique com o botão direito no arquivo index.html.

Selecione "Open with Live Server".

O projeto deve abrir no endereço http://127.0.0.1:5500/... e toda a interatividade estará funcional.



IV. ✨ Requisitos Técnicos e Implementação Detalhada

✅ Arquitetura SPA - Navegação controlada por Hash (#home, #doar) no spa.js, usando window.addEventListener('hashchange').
✅ Modularidade JS - Lógica dividida em main.js (entry point), spa.js (rotas), e forms.js (validação e dinamicidade), usando import/export.
✅ Design System (Variáveis) - Definição de 8 Cores, 5 Tamanhos de Fonte e 6 Níveis de Espaçamento Modular no bloco :root em main.css.
✅ CSS Layout - Uso de Flexbox (Cabeçalho, Rodapé) e CSS Grid (Cards de Projeto) para posicionamento.
✅ 5 Breakpoints - Layout totalmente responsivo com regras de Media Query definidas para 5 tamanhos de tela (incluindo 1200px, 992px, 768px, 576px, 400px).
✅Menu Mobile Interativo - Menu hambúrguer ativado via JavaScript (main.js) que alterna a classe .aberto para exibir a navegação em telas < 768px.
✅ Formulário DinâmicoImplementação de lógica no forms.js para: 
1. Validação (Mínimo R$ 10,00);
2. Atualização da barra de progresso da meta; 
3. Feedback visual de erro.


V. 🖼️ Demonstração Visual

As imagens a seguir demonstram a aplicação em diferentes estados e interações:
1. Layout Principal (Desktop) - Exibição do Design System, uso de Flexbox no cabeçalho e Grid nos cards de projeto.
2. Seção de Doação (Formulário Dinâmico) - Demonstração do formulário de doação e da barra de progresso em funcionamento.
3. Validação de Formulário - Feedback visual (.input-erro) e mensagem de consistência ao tentar doar um valor inválido.
4. Layout Mobile (768px) - Visualização do menu hambúrguer ativo e cards de projeto reformatados para 2 colunas.
