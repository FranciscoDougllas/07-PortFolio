// Seleciona o elemento onde o texto será exibido
const textoElement = document.querySelector('.texto');

// Frases que serão digitadas
const frases = [
    "Olá, eu sou Francisco Douglas",
    "Desenvolvedor FullStack e UX/UI Designer.",
    "Freelance, Cursando Engenharia de Software.",
    "Que tal trabalharmos juntos para criar algo incrível?"
];

let currentPhrase = 0;  // Frase atual a ser digitada
let currentChar = 0;    // Caractere atual dentro da frase
let typingInterval;
let pauseTime = 1000;    // Pausa de 1 segundo entre as frases
let loopPauseTime = 5000 //Pausa de 5 Segundos entre os Loops


// Função para escrever uma frase
function escreverTexto() {
    // Se ainda houver caracteres para digitar na frase
    if (currentChar < frases[currentPhrase].length) {
        textoElement.textContent += frases[currentPhrase][currentChar];
        currentChar++;
    } else {
        clearInterval(typingInterval); // Interrompe a digitação atual da frase

        // Pausa de 1 segundo antes de iniciar a próxima frase
        setTimeout(() => {
            currentPhrase++;  // Avança para a próxima frase
            if (currentPhrase < frases.length) {
                currentChar = 0;  // Reseta o contador de caracteres
                textoElement.textContent = ''; // Limpa o texto para a nova frase
                typingInterval = setInterval(escreverTexto, 100); // Reinicia a digitação
            }else{
                setTimeout(() => {
                    currentPhrase = 0; // Reseta para a primeira frase
                    currentChar = 0;   // Reseta o contador de caracteres
                    textoElement.textContent = ''; // Limpa o texto
                    typingInterval = setInterval(escreverTexto, 100); // Reinicia o efeito de digitação
                }, loopPauseTime); // Pausa de 5 segundos antes de reiniciar
            }
        }, pauseTime);
    }
}


// Inicia o efeito de digitação assim que a página carregar
window.onload = () => {
    typingInterval = setInterval(escreverTexto, 100);
};