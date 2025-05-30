function segundoMaior(senai) {
    if (senai.length < 2) {
      return "indefinido";  
    }

    let maior = senai[0]
    let segundoMaior = senai[0]

for (let i = 1; i < senai.length; i++) {
    if (senai[i] > maior) {
        segundoMaior = maior
        maior = senai[i];
    } else if (senai[i] < maior && senai[i] > segundoMaior) {
        segundoMaior = senai[i];
    }
}   

return segundoMaior;
}

console.log(segundoMaior([7,8,4,3,2]));
    