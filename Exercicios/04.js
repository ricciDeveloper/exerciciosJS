// ### 🔹 Estruturas de repetição e funções
// **4. Laço de repetição**  
// Crie um laço que imprima os números de 1 a 20, mas:  
// - Pule os múltiplos de 3  
// - Quando chegar no 15, pare o laço  
// 📌 *Conceitos: for, continue, break*

// Sintaxe:

// for (inicialização; condição; incremento) {
//     // bloco de código
// }

for(let i = 1; i < 20 ; i++){
    
    if(i % 3 == 0){
       
        if ( i == 15){
            break;
        }
    continue;
    }
    
    else{
        console.log(i);
    }
    
}