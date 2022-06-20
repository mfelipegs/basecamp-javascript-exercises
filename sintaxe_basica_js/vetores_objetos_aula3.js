// o que são vetores ou arrays

//let array = ['string', 1, true];
//console.log(array);

//pod guardar varios tipo de addo
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array[0]);


//foreach()
//array.forEach(function(item, index){console.log(item, index)})

//push()
//array.push('novo item')
//console.log(array)

//pop() - apaga o ultimo item do array
//array.pop();
//console.log(array);

//shift() - apaga o primeiro item do array
//array.shift()
//console.log(array);

//unshift() 
//array.unshift('novo item no inicio');

//indexOf() - retorna um indice de um valor
//console.log(array.indexOf(true))

//splice() - remove ou substitui um item por um indice
//array.splice(0, 3); //apagou 0, 1, 2
//console.log(array);

//slice() - retorna parte de um array ja existente
//let novoarray = array.slice(0, 3);
//console.log(novoarray)


//OBJETOS - POSSUEM Propriedades e valores q definem suas caracteristicas, deve ser declarado entre chaves {}
/* var xicara = {
	cor: 'azul',
	tamanho: 'p',
	funcao: tomarCafe()
} */

//desestruturaçao - atribuir propriedades dos objetos a variáveis, facilitando manipulacao do objeto
//var cor = xicara.cor;
//var tamanho = xicara.tamanho;
//var funcao = tomarCafe();


let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'} };
//console.log(object.boolean); //retorna true
//console.log(object.objectInterno);

//var string = object.string;
//console.log(string);

//var arrayInterno = object.array;
//console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
