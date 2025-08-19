// **3. Condicional simples**  
// Receba a idade de uma pessoa e:  
// - Se for menor que 18 → "Menor de idade"  
// - Se entre 18 e 60 → "Adulto"  
// - Se maior que 60 → "Idoso"  
// 📌 *Conceitos: if / else if / else, operadores relacionais*


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Qual sua idade? ", (resposta) => {
    let idade = Number(resposta);

    if(idade < 18){
        console.log("Menor de idade.");
    }
    else if(idade >= 18 && idade <= 60){
        console.log("Adulto");
    }else{
        console.log("Idoso.")
    }

    readline.close();
});