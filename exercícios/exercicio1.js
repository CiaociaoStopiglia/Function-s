function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  } else if (numero % Math.sqrt(numero) === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(ehPrimo(4));
