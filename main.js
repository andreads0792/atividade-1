
import { navegar } from './modules/spa.js';
import { inicializarFormularioDoacao } from './modules/forms.js';


function orquestrarRotas(rotaAtual) {
    
    if (rotaAtual === 'doar') {
        
        inicializarFormularioDoacao();
    }
    
    
    const navMenu = document.querySelector('.menu-navegacao ul');
    if (navMenu && navMenu.classList.contains('aberto')) {
        navMenu.classList.remove('aberto');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.menu-navegacao ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('aberto');
        });
    }
    
    navegar(window.location.hash, orquestrarRotas);
});


window.addEventListener('hashchange', () => {
    navegar(window.location.hash, orquestrarRotas);
});