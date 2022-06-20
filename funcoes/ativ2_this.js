const p1 = {
    nome: 'Joao',
    idade: 23
}

const p2 = {
    nome: 'Gerson',
    idade: 18
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(p1, 5));
console.log(calculaIdade.apply(p2, [5]));