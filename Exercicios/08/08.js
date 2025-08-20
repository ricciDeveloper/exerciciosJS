// ### 🔹 DOM e Eventos
// **8. Manipulação do DOM**  
// Crie um botão no HTML e, no JavaScript, faça:  
// - Ao clicar, mudar a cor de fundo da página.  
// 📌 *Conceitos: document.querySelector, eventos, manipulação de estilos*

const botao = document.querySelector("button");
botao.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
});

