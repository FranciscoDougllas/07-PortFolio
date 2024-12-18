// Seleciona o botão e o menu pelos seletores
const nav = document.querySelector('.navbar');
const btn = document.querySelector('.btn-button');

// Adiciona o evento para alternar a exibição do menu ao clicar no botão
btn.addEventListener('click', () => {
    // Alterna a classe que exibe/oculta o menu
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Garante que o menu seja visível novamente quando a tela for maior que 600px
window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});




