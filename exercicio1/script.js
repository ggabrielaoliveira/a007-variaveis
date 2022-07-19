let nome= prompt("Qual é o seu nome?");
let idade=Number(prompt("Qual a sua idade?"));
console.log(typeof nome);
console.log(typeof idade);
/*o tipo string foi impresso nos dois, mesmo na idade ,porque como não
tem valor atribuido, tem que colocar só as aspas e é entendido que é um
tipo de texto*/
// atualizado
/* ainda estava como tipo de string a idade, mudei para 
let idade=Number(prompt("Qual sua idade?"));*/
 
console.log("Olá,",nome,",você tem",idade,"anos.");


