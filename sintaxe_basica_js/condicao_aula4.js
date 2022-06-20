var jogador1 = 0;
var jogador2 = 1;
var placar;

/*
if(jogador1 != -1) {
	if(jogador1 > 0) {
		console.log('Jogador 1 marcou ponto');
	}

	else if (jogador2 > 0) {
		console.log('Jogador 2 marcou ponto');
	}

	else {
		console.log('Ninguém marcou');
	}
}
*/

//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : 
console.log('Jogadores inválidos');

if(jogador1 > 0 && jogador2 == 0) {
		console.log('Jogador 1 marcou ponto!');
		placar = jogador1 > jogador2;
	}

	else if (jogador2 > 0 && jogador1 == 0) {
		console.log('Jogador 2 marcou ponto');
		placar = jogador2 > jogador1;
	}

	else {
		console.log('Ninguém marcou');
	}


switch(placar) {
	case placar = jogador1 > jogador2:
		console.log('jogador 1 ganhou');
		break;
		
	case placar = jogador2 > jogador1:
		console.log('jogador 2 ganhou');
		break;
		
	default:
		console.log('Ninguém ganhou');
}
