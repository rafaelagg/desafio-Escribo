function somatorioDivisiveisde3ou5() {
  let numero = document.getElementById("numero").value;
  let errorMsg = document.getElementById("erro");
  let resultadosMsg = document.getElementById("resultados");
  let numerosMsg = document.getElementById("numerosDivisiveis");
  let arrDivisiveis = [];
  let somaDivisiveis = 0;
  numero = parseInt(numero);
  if (numero < 0 || numero % 1 !== 0 || !Number.isInteger(numero)) {
    alert("Por favor, digite um número inteiro e positivo.");
    return;
  }
  if (numero > 1 && numero > 2) {
    for (let i = 1; i <= numero; i++) {
        if(i % 5 === 0 || i % 3 === 0){
            arrDivisiveis.push(i)
            somaDivisiveis += i
        }
    }
    document.getElementById("numero").value = '';
    resultadosMsg.innerText = `O resultado da soma é: ${somaDivisiveis}`;
    numerosMsg.innerText = `Os divisíveis são: ${arrDivisiveis}`;
  } else {
    resultadosMsg.innerText = '';
    numerosMsg.innerText = '';
    
    errorMsg.innerText = `Insira um numero que seja divisivel por 3 ou 5`;
    setTimeout(() => {
        errorMsg.innerText = ''
    }, 3000);
  }
}
