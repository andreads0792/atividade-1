const gridProjetosTemplate = `
    <div class="grid-projetos">
        
        <article class="projeto-card">
            <h4>Educação para o Futuro</h4>
            <p>Criamos centros de reforço escolar e bibliotecas digitais, combatendo a evasão e preparando jovens para o mercado de trabalho com foco em tecnologia.</p>
        </article>
        
        <article class="projeto-card">
            <h4>Iniciativa Eco-Florestal</h4>
            <p>Promovemos o reflorestamento de áreas degradadas e realizamos oficinas de reciclagem e compostagem, fomentando comunidades autossustentáveis.</p>
        </article>
        
        <article class="projeto-card">
            <h4>Saúde e Bem-Estar</h4>
            <p>Organizamos mutirões de atendimento médico e odontológico em áreas de difícil acesso, garantindo o acesso a exames e cuidados primários essenciais.</p>
        </article>
        
        <article class="projeto-card">
            <h4>Arte e Inclusão Social</h4>
            <p>Oferecemos aulas gratuitas de teatro, música e dança, utilizando a arte como ferramenta poderosa para o desenvolvimento da autoestima e integração social de crianças.</p>
        </article>
        
    </div>
`;

export const templates = {

    home: `
        <section id="hero" class="secao-hero" style="
            background: linear-gradient(135deg, var(--cor-primaria) 0%, var(--cor-sucesso) 120%); 
            color: white; 
            padding: var(--espacamento-xxl) 0;
            min-height: 400px; 
            display: flex;
            align-items: center; 
        ">
            <div class="container">
                <h2 style="font-size: var(--fonte-xxxl); margin-bottom: var(--espacamento-md);">Transforme Vidas Hoje. Doe com Amor.</h2>
                <p style="font-size: var(--fonte-grande); max-width: 700px; margin: 0 auto var(--espacamento-lg) auto;">
                    Junte-se à nossa missão para construir um futuro mais justo, sustentável e cheio de oportunidades em comunidades carentes.
                </p>
                <a href="#doar" class="botao-destaque" style="font-size: var(--fonte-grande); padding: var(--espacamento-sm) var(--espacamento-lg);">
                    Quero Doar Agora
                </a>
            </div>
        </section>
        
        <section id="projetos-destaque" class="secao-projetos">
            <div class="container">
                <h3>Nossos Projetos em Ação</h3>
                ${gridProjetosTemplate} 
            </div>
        </section>
    `,

    gridProjetos: gridProjetosTemplate,

    doar: `
        <section id="doar-page" class="secao-doacao" style="background-color: var(--cor-neutra-clara); padding: var(--espacamento-xxl) 0;">
            <div class="container" style="max-width: 600px;">
                <h3 style="font-size: var(--fonte-xxl);">Seu Apoio Constrói o Amanhã.</h3>
                <p>Cada doação nos permite expandir nossas ações em educação, saúde e sustentabilidade. Contribua com o valor que toca seu coração.</p>

                <div class="progresso-meta" style="
                    background-color: white; 
                    padding: var(--espacamento-md); 
                    border-radius: var(--borda-radius); 
                    box-shadow: var(--sombra-card);
                    margin-bottom: var(--espacamento-lg);
                ">
                    <p style="font-weight: 600;">Meta Global: R$ 10.000,00</p>
                    <p style="font-size: var(--fonte-grande); color: var(--cor-primaria);">Arrecadado: <span id="valor-arrecadado">R$ 4.250,00</span></p>
                    
                    <div class="barra-progresso" style="
                        height: 10px; 
                        background-color: var(--cor-neutra-escura); 
                        border-radius: 5px; 
                        overflow: hidden; 
                        margin-top: var(--espacamento-sm);
                    ">
                        <div id="progresso" style="
                            height: 100%; 
                            background-color: var(--cor-sucesso); 
                            width: 42.5%; /* Valor inicial */
                            transition: width 0.5s ease;
                        "></div>
                    </div>
                </div>
                
                <form id="form-doacao" style="
                    background-color: white; 
                    padding: var(--espacamento-lg); 
                    border-radius: var(--borda-radius); 
                    box-shadow: var(--sombra-card);
                ">
                    <label for="valor" style="display: block; text-align: left; margin-bottom: var(--espacamento-xs); font-weight: 600;">
                        Valor da Doação (R$):
                    </label>
                    <input type="number" id="valor" required min="10" placeholder="Mínimo R$ 10,00" style="margin-top: 0;">
                    
                    <button type="submit" class="botao-primario" style="width: 100%;">
                        Doar
                    </button>
                    <p id="feedback-erro" style="color: var(--cor-erro); margin-top: var(--espacamento-sm); display: none; text-align: center;"></p>
                </form>
            </div>
        </section>
    `,

    "quem-somos": `
        <section class="secao-quem-somos" style="padding: var(--espacamento-xxl) 0;">
            <div class="container" style="max-width: 800px;">
                <h2 style="font-size: var(--fonte-xxl);">Nossa Missão é Mudar o Mundo.</h2>
                <p style="font-size: var(--fonte-grande); margin-bottom: var(--espacamento-lg);">Somos uma equipe dedicada de voluntários, educadores e profissionais da saúde focados em criar impacto social duradouro. Nossa missão é oferecer as ferramentas necessárias para que comunidades em situação de vulnerabilidade se desenvolvam e prosperem por conta própria.</p>
                <p>Desde 2018, já impactamos a vida de milhares de famílias com programas de alfabetização digital e acesso à saúde preventiva.</p>
            </div>
        </section>
    `,
    "projetos": `
        <section class="secao-projetos" style="padding: var(--espacamento-xxl) 0;">
            <div class="container">
                <h2>Todos os Nossos Projetos</h2>
                <p style="margin-bottom: var(--espacamento-lg);">Conheça cada detalhe das iniciativas que transformam a vida em nossas comunidades.</p>
                ${gridProjetosTemplate}
            </div>
        </section>
    `
};

// Lógica de navegação (SPA)
export function navegar(hash, callback) {
    const conteudoPrincipal = document.getElementById('conteudo-principal');
    let rota = hash.substring(1) || 'home';

    if (templates[rota]) {
        conteudoPrincipal.innerHTML = templates[rota];

        if (typeof callback === 'function') {
            callback(rota);
        }

        window.scrollTo(0, 0);
    } else {
        conteudoPrincipal.innerHTML = `<section class="secao-404" style="padding: 100px; text-align: center;"><h2>Página Não Encontrada (404)</h2></section>`;
    }
}