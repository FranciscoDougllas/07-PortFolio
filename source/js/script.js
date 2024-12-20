// Seleciona o botão e o menu pelos seletores
const nav = document.querySelector('.navbar');
const btn = document.querySelector('.btn-button');

// Adiciona o evento para alternar a exibição do menu ao clicar no botão
btn.addEventListener('click', () => {
    nav.classList.toggle('active'); // Alterna a classe 'active' para mostrar/ocultar o menu
});






// Array contendo os gradientes
const gradientes = [
    'linear-gradient(45deg, #40404E, #9494B4)', // Escuro
    'linear-gradient(45deg, #212121, #878787)', // Escuro
    'linear-gradient(45deg, #ccc, #BDC3C7)',    // Claro
    'linear-gradient(45deg, #111, #000)',       // Escuro
    'linear-gradient(45deg, #dbe7ea, #fff)'     // Claro
];

// Array indicando se o gradiente é escuro ou claro
const fontesClaras = [true, true, false, true, false];

// Variável para acompanhar o gradiente atual
let indiceGradienteAtual = 0;

// Acessa o botão pelo 'id' e adiciona um ouvinte de eventos para 'click'
document.getElementById('cores').addEventListener('click', function (event) {
    // Aplica o gradiente atual como fundo do corpo
    document.body.style.background = gradientes[indiceGradienteAtual];

    // Aplica o mesmo gradiente como fundo do botão
    event.target.style.background = gradientes[indiceGradienteAtual];

    // Define a cor da fonte com base no gradiente atual
    const corFonte = fontesClaras[indiceGradienteAtual] ? '#fff' : '#333';
    document.body.style.color = corFonte; // Muda a cor da fonte do corpo
    event.target.style.color = corFonte; // Muda a cor da fonte do botão

    // Atualiza o índice para o próximo gradiente, voltando ao início se atingir o final do array
    indiceGradienteAtual = (indiceGradienteAtual + 1) % gradientes.length;
});


