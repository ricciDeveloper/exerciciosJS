// **7. Objetos literais**  
// Crie um objeto `pessoa` com as propriedades: nome, idade, cidade.  
// - Mostre apenas o nome.  
// - Atualize a idade.  
// - Adicione uma nova chave `profissão`.  
// 📌 *Conceitos: objetos literais, manipulação de propriedades*


let pessoa = {
    nome: "joão",
    idade:25,
    cidade: "Xique Xique - BA"
}

console.log("Nome da pessoa: ",pessoa.nome);

pessoa.idade = 26;
pessoa.profissao = "SEO Técnico";
console.log("Objeto pessoa completo: ", pessoa, "\n");

pessoa["Pais"] = "Brasil";
pessoa["LLM"] = "ChatGPT";
// console.log("Objeto pessoa completo: ", pessoa, "\n");
pessoa["nome"] = "João Victor";
// console.log("Objeto pessoa completo: ", pessoa, "\n");

console.log("Objeto pessoa completo: ", pessoa, "\n");