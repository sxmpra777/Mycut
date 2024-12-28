// script.js
const imagens = ["imgg/Ana1.jpg", "imgg/Ana2.jpg", "imgg/Ana3.jpg" , "imgg/Ana4.jpg" , "imgg/Ana5.jpg" , "imgg/Ana6.jpg" , "imgg/Ana1.gif" , "imgg/Ana2.gif"];
let indiceAtual = 0;

const imagem = document.getElementById("imagem");
const btnPrev = document.querySelector(".prevv");
const btnNext = document.querySelector(".next");

btnPrev.addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    imagem.src = imagens[indiceAtual];
});

btnNext.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imagem.src = imagens[indiceAtual];
});

document.getElementById("btn-compra").addEventListener("click", () => {
    alert("Redirecionando para compra de conteúdos...");
});

document.getElementById("enviar-avaliacao").addEventListener("click", () => {
    const feedback = document.getElementById("feedback").value;
    if (feedback) {
        alert("Obrigado pela sua avaliação!");
        document.getElementById("feedback").value = "";
    } else {
        alert("Por favor, escreva uma avaliação antes de enviar.");
    }
});