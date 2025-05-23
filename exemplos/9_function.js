function primeiraMaiuscula(nome){
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

console.log(primeiraMaiuscula("joÃO"))