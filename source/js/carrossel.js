// document.addEventListener('DOMContentLoaded', () => {
//     let indiceAtual = 0;
//     const slides = document.querySelectorAll('.slide');
//     const btnAnterior = document.querySelector('.anterior');
//     const btnProximo = document.querySelector('.proximo');
//     let intervaloAutoPlay;

//     function atualizarSlides() {
//         slides.forEach((slide, index) => {
//             slide.classList.remove('active', 'prev', 'next');
//             if (index === indiceAtual) {
//                 slide.classList.add('active');
//             } else if (index === (indiceAtual === 0 ? slides.length - 1 : indiceAtual - 1)) {
//                 slide.classList.add('prev');
//             } else if (index === (indiceAtual === slides.length - 1 ? 0 : indiceAtual + 1)) {
//                 slide.classList.add('next');
//             }
//         });
//     }

//     function iniciarAutoPlay() {
//         intervaloAutoPlay = setInterval(() => {
//             indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
//             atualizarSlides();
//         }, 5000);
//     }

//     btnAnterior.addEventListener('click', () => {
//         clearInterval(intervaloAutoPlay);
//         indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : slides.length - 1;
//         atualizarSlides();
//         iniciarAutoPlay();
//     });

//     btnProximo.addEventListener('click', () => {
//         clearInterval(intervaloAutoPlay);
//         indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
//         atualizarSlides();
//         iniciarAutoPlay();
//     });

//     atualizarSlides();
//     iniciarAutoPlay();
// });













// document.addEventListener('DOMContentLoaded', () => {
//     let indiceAtual = 0;
//     const slides = document.querySelectorAll('.slide');
//     const btnAnterior = document.querySelector('.anterior');
//     const btnProximo = document.querySelector('.proximo');
//     const ferramentasContainer = document.querySelector('.habilidades-icons');
//     let intervaloAutoPlay;

//     const ferramentas = {
//         frontend: ['html', 'css', 'javascript'],
//         backend: ['python', 'java', 'nodejs', 'django'],
//         mobile: ['swift', 'kotlin', 'java', 'react-native', 'flutter'],
//         devops: ['docker', 'kubernetes', 'jenkins', 'AWS']
//     };

//     function atualizarSlides() {
//         slides.forEach((slide, index) => {
//             slide.classList.remove('active', 'prev', 'next');
//             if (index === indiceAtual) {
//                 slide.classList.add('active');
//                 atualizarFerramentas(slide.id);
//             } else if (index === (indiceAtual === 0 ? slides.length - 1 : indiceAtual - 1)) {
//                 slide.classList.add('prev');
//             } else if (index === (indiceAtual === slides.length - 1 ? 0 : indiceAtual + 1)) {
//                 slide.classList.add('next');
//             }
//         });
//     }

//     function atualizarFerramentas(habilidade) {
//         ferramentasContainer.innerHTML = ''; // Limpa as ferramentas anteriores
//         ferramentas[habilidade].forEach(ferramenta => {
//             const div = document.createElement('div');
//             div.classList.add(ferramenta); // Adiciona a classe da ferramenta
//             div.textContent = ferramenta; // Adiciona o nome da ferramenta como texto
//             ferramentasContainer.appendChild(div);
//         });
//     }

//     function iniciarAutoPlay() {
//         intervaloAutoPlay = setInterval(() => {
//             indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
//             atualizarSlides();
//         }, 5000);
//     }

//     btnAnterior.addEventListener('click', () => {
//         clearInterval(intervaloAutoPlay);
//         indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : slides.length - 1;
//         atualizarSlides();
//         iniciarAutoPlay();
//     });

//     btnProximo.addEventListener('click', () => {
//         clearInterval(intervaloAutoPlay);
//         indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
//         atualizarSlides();
//         iniciarAutoPlay();
//     });

//     atualizarSlides();
//     iniciarAutoPlay();
// });




document.addEventListener('DOMContentLoaded', () => {
    let indiceAtual = 0;
    const slides = document.querySelectorAll('.slide');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    const ferramentasContainer = document.querySelector('.habilidades-icons');
    let intervaloAutoPlay;

    const ferramentas = {
        frontend: ['html', 'css', 'javascript', 'react', 'angular', 'vue', 'typescript'],
        backend: ['python', 'java', 'nodejs', 'django', 'php'],
        mobile: ['html', 'css', 'javascript', 'react', 'angular', 'vue', 'typescript'], //['swift', 'kotlin', 'java', 'react-native', 'flutter'],
        devops: ['html', 'css', 'javascript', 'react', 'angular', 'vue', 'typescript'],//['docker', 'kubernetes', 'jenkins'],
        designer: ['html', 'java', 'javascript', 'react', 'angular', 'vue', 'typescript'],//['figma', 'adobe-xd', 'sketch', 'invision', 'zeplin'],
    };

    function atualizarSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            if (index === indiceAtual) {
                slide.classList.add('active');
                atualizarFerramentas(slide.id);
            } else if (index === (indiceAtual === 0 ? slides.length - 1 : indiceAtual - 1)) {
                slide.classList.add('prev');
            } else if (index === (indiceAtual === slides.length - 1 ? 0 : indiceAtual + 1)) {
                slide.classList.add('next');
            }
        });
    }

    function atualizarFerramentas(habilidade) {
        const todasFerramentas = ferramentasContainer.querySelectorAll('img');
        todasFerramentas.forEach(img => {
            img.style.display = 'none'; // Oculta todas as imagens
        });
        ferramentas[habilidade].forEach(ferramenta => {
            const img = ferramentasContainer.querySelector(`.${ferramenta}`);
            if (img) {
                img.style.display = 'block'; // Exibe apenas as imagens correspondentes às ferramentas da habilidade atual
            }
        });
    }

    function iniciarAutoPlay() {
        intervaloAutoPlay = setInterval(() => {
            indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
            atualizarSlides();
        }, 5000);
    }

    btnAnterior.addEventListener('click', () => {
        clearInterval(intervaloAutoPlay);
        indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : slides.length - 1;
        atualizarSlides();
        iniciarAutoPlay();
    });

    btnProximo.addEventListener('click', () => {
        clearInterval(intervaloAutoPlay);
        indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
        atualizarSlides();
        iniciarAutoPlay();
    });

    atualizarSlides();
    iniciarAutoPlay();
});
