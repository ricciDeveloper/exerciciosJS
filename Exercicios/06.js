// ### 🔹 Arrays e Objetos
// **6. Arrays básicos**  
// Crie um array com 5 nomes.  
// - Mostre o primeiro e o último.  
// - Adicione um novo nome ao final.  
// - Remova o segundo nome.  
// 📌 *Conceitos: arrays, índices, push, pop, splice*


let lista = ["joão", "pedro", "thiago", "josé","cleitin"];

console.log("Primeiro nome da lista: ",lista[0]);
console.log("Último nome da lista: ",lista[4]);

lista.push("gilso");

console.log("Adição de mais um nome na lista: ", lista);

lista.splice(1,1);

console.log("Remoção do segundo nome da lista",lista);