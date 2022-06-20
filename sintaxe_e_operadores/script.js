function verificaNumbers(n1, n2) {
    if (n1 === n2) {
        return console.log(`Os números ${n1} e ${n2} são iguais.`);
    }
    return console.log(`Os números ${n1} e ${n2} são diferentes.`);
}

function verificaSoma(n1, n2) {
    soma = n1 + n2;
    let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

    return console.log(`Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`);
}

verificaNumbers(5, 10);
verificaSoma(5, 10);