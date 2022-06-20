//funcoes declarativas - possuem uso + comum, function nome( ) { }
//obrigatoriamente tme q ter nome, se apagar o nome, para de funfar
/*
function funcao() {
	console.log('mensagem de funcao declarativa');
}

funcao();
*/

//expressoes de funcoes - nome opcional
//js atribui o nome da variavel à funcao
//ou var funcao = function() {
/*
var funcao = function funcao() {
	console.log('mensagem de funcao de expressao');
}

funcao();
*/

//arrow - funcoes de sintaxe curta
//anonimas sempre, n podem ser nomeadas
//declarada c parenteses () seguido de => e dps chaves {}

var funcao = () => {
	console.log('sou arrow function');
}

funcao();


