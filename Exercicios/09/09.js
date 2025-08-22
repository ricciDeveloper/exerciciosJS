// **9. Criar elementos dinamicamente**
// Crie uma lista (`ul`) no HTML vazia.
// No JS, faça uma função que:
// - Ao clicar em um botão, adicione um novo item (`li`) à lista.
// 📌 *Conceitos: DOM, createElement, appendChild, eventos*

botao = document.querySelector("button");

botao.addEventListener("click", () => {
    let li = document.createElement("li");// criar o elemento
    li.textContent = "novo item da lista"; //adiciona texto ao novo item
    document.querySelector("ul").appendChild(li); //insere o elemento 
});
