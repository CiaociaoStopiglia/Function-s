function inverteArray(arr) {
  let novoArray = [];
  let tamanho = arr.length;

  for (let i = tamanho - 1; i >= 0; i--) {
    novoArray[novoArray.length] = arr[i];
  }
  return novoArray;
}

let muarray = [1, 2, 3, 4, 5];
let arrayInvertido = inverteArray(muarray);
console.log(arrayInvertido);
