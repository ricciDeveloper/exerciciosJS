// **5. Funções com parâmetros**  
// Crie uma função que receba um número e retorne o fatorial desse número.  
// 📌 *Conceitos: funções, parâmetros, retorno, recursividade ou loops*

function teste(number1){
//     let resultado = 1;
//     for (let i = 1 ; i <= number1; i++){
//         resultado = resultado * i;
//         console.log(resultado)
//     }
//     return resultado;
//  Recursivo:


    if(number1 === 0 || number1 === 1){
        return 1;
    }

    return number1 * teste( number1 - 1 );
    

}
console.log(teste(5));

