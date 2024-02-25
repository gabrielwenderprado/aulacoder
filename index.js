let resultado = 0

function calcularICMS() {
    const valorProd = parseInt(prompt('Digite o valor do produto: '))
    const CEP = prompt('Digite seu cep para calcular o ICMS: ')
    

    if (CEP === 'SP'){
      return resultado = (valorProd * 0.2) + valorProd
    } else if (CEP === 'MG'){
      return resultado = (valorProd * 0.18) + valorProd
    } else if (CEP === 'PR'){
      return resultado = (valorProd * 0.15) + valorProd
    }
}

calcularICMS()
console.log('o valor do ICMS do seu produto é de ' + resultado)
