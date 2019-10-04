//Inicio dos estudos com JS!
// Declarando uma variável
var olaMundo = "Ola mundo!";

//Declarando uma variável por escopo
let idade = 21;

//Mostra o tipo de dado de uma variável
typeof idade;

//Funções de conversão de tipos
parseFloat
parseInt
toString

//Declarando uma constante
const nome = "Matheus";

console.log(olaMundo);
console.log(olaMundo);

//estrutura do switch
/*switch(variavel){
    case "condição":
        //oq fazer...
        break;
    case "outra condição":
        //oq fazer 2...
        break;
    default:
        console.log("não sei"); 
}*/

//template string
console.log(`${nome} é lindo!`);

//funções
/*function calc(x1, x2, operador){
    //eval = função nativa que interpreta string
    return eval(`${x1} ${operador} ${x2}`);
}

let resultado = calc(1,99, '+');
console.log(resultado);
*/
//Função anonima com chamada em seguida
/*(function(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
})(1, 2, "+"); //chamada da função
*/

//arrow function
/*let calc = (x1, x2, operador) => {
    return eval (`${x1} ${operador} ${x2}`);
}

let resultado = calc(1, 2, "-");
console.log(resultado);
*/

//evento
window.addEventListener('focus', event =>{
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log("click");
});

//window manipula a aplicação
//document manipula a página