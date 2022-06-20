//solucao 1
function verificaPalindromo(string) {
    if(!string) return "string inexistente";
    //verifica se variavel vem null, vazia ou undefined
    //não precisa de else, pois sai da função e acaba com o return

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));

//solucao 2
function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba"));