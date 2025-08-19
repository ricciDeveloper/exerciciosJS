// **2. Operações Matemáticas**  
// Receba dois números e:  
// - Some  
// - Subtraia  
// - Multiplique  
// - Divida  
// Mostre os resultados no console.  
// *Conceitos: operadores aritméticos, console.log*

/**Aqui importamos o módulo com require("readline").
 * Criamos uma interface (createInterface) ligando input ao etclado (process.stdin) e output ao console (process.stdout)
 * Usa o método question ("texto", callback) -> isso exibe a pergunta e espera a resposta do usuário
 * A resposta vem como string no callback, como estamos trabalhando com operações matemáticas, convertemos a string com  Number(reposta)
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite o primeiro número: ", (resposta1) => {
    readline.question("Digite o segundo número: ", (resposta2) => {
        let number1 = Number(resposta1);
        let number2 = Number(resposta2);

        console.log("Soma: ", number1 + number2);
        console.log("Subtração: ", number1 - number2);
        console.log("Multiplicaçao: ", number1 * number2);
        console.log("Divisao: ", number1 / number2);

        readline.close();
    });
});
