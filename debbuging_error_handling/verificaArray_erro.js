function verificaArray(array, n) {
    try {
        if(!array && !n) {
            throw new ReferenceError("Envie os parâmetros");
        }

        if(typeof array !== 'object') {
            throw new TypeError("O array precisa ser do tipo object");
        }

        if(typeof n !== 'number') {
            throw new TypeError("O número precisa ser do tipo number");
        }

        if(array.length !== n) {
            throw new RangeError("Tamanho inválido.");
        }
        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        }

        else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(e.message);
        }

        else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError");
            console.log(e.message);
        }

        else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}


arr = [3, 5, 7]
console.log(verificaArray(arr, 3));