document.addEventListener("DOMContentLoaded", function() {
    // Espera que o DOM esteja completamente carregado antes de executar o código

    // Obtém as imagens
    const imagem1 = document.querySelector('.imagem1');
    const imagem2 = document.querySelector('.imagem2');

    // Define um pequeno atraso antes de iniciar a animação
    setTimeout(() => {
        imagem1.style.top = '50%'; // Move a imagem1 para baixo (ajustei para 50% para centralizar)
        imagem2.style.top = '100%'; // Move a imagem2 para baixo
    }, 500); // Aguarda 500 milissegundos (0.5 segundos) antes de iniciar a animação
});
