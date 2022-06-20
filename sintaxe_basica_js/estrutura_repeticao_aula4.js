//for, for/in, for/of, while, do/while


let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {
	propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 
'valor3' }

/* for (let indice = 0; indice < array.length; indice++) {
	console.log(indice);
} */

//for/in executa repetição a partir de uma propriedade
//com array
/* 
for (let i in array) {
	console.log(i);
}

//com object
for (i in object) {
	console.log(i);
}
*/


//for/of executa a repetição a partir de um valor
//com array
/* for (i of array) {
	console.log(i)
}

//for/of n funfa com object pq propriedades variam, diferente dos indices de um array
//q sempre serão numeros inteiros
//da p fazer msm assim mas tem q passar propriedade dentro da condiçao
for (i of object.propriedade1) {
	console.log(i)
} */
//imprimiu cada letra em cada linha


//while
/* var a = 0;
while (a < 10) {
	a++;
	console.log(a);
}
*/

//do while: executa uma instrução "até que" determinada condição seja falsa, a verificação é feita depois da execução
var a = 0;
do {
	a++;
	console.log(a);
} while(a < 10)
