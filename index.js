// let resultado = 0

// function calcularICMS() {
//     const valorProd = parseInt(prompt('Digite o valor do produto: '))
//     const CEP = prompt('Digite seu cep para calcular o ICMS: ')
    

//     if (CEP === 'SP'){
//       return resultado = (valorProd * 0.2) + valorProd
//     } else if (CEP === 'MG'){
//       return resultado = (valorProd * 0.18) + valorProd
//     } else if (CEP === 'PR'){
//       return resultado = (valorProd * 0.15) + valorProd
//     }
// }

// calcularICMS()
// console.log('o valor do ICMS do seu produto é de ' + resultado)

import "./styles.css";

function calculaPorcentagem(valorProd, porcentagem) {
  // Função que calcula a porcentagem
  return valorProd * porcentagem + valorProd;
}

function calcularICMS(cep, valorProd) {
  // Função que calcula ICMS com base na localidade
  let resultadoICMS = 0;

  if (cep === "SP") {
    resultadoICMS = calculaPorcentagem(valorProd, 0.2);
  }
  if (cep === "MG") {
    resultadoICMS = calculaPorcentagem(valorProd, 0.18);
  }
  if (cep === "PR") {
    resultadoICMS = calculaPorcentagem(valorProd, 0.21);
  }
  if (cep === "MT") {
    resultadoICMS = calculaPorcentagem(valorProd, 0.17);
  }
  if (cep === "SC") {
    resultadoICMS = calculaPorcentagem(valorProd, 0.14);
  }
  if (cep === "RS") {
    resultadoICMS = calculaPorcentagem(valorProd, 0.25);
  }
  if (cep === "RJ") {
    resultadoICMS = calculaPorcentagem(valorProd, 0.23);
  }

  return resultadoICMS;
}

function ICMS() {
  // Funçao que recebe os dados e retorna o resultado
  const valorProd = parseInt(prompt("Digite o valor do produto: "));
  const CEP = prompt("Digite seu cep para calcular o ICMS: ");

  return calcularICMS(CEP, valorProd);
}

console.log("o valor do ICMS do seu produto é de " + ICMS());