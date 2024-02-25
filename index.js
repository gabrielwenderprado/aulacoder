//let nomeInserido = prompt('insira seu nome completo')
//let idadeInserida = prompt('insira sua idade')

//alert('Olá: ' + nomeInserido)
//alert('a idade inserida foi: ' + idadeInserida)

//let numeroInserido = prompt('insira o ano em que voçe nasceu')
//let numeroInserido2 = prompt('insira o ano atual')
//console.log(parseInt(numeroInserido) - parseInt(numeroInserido2 ))



//let nome = prompt('inseria seu primeiro nome')
//let sobrenome = prompt('insira seu sobre nome')
//const nomecompleto = `${nome} ${sobrenome}`
//alert('seu nome é:' + nomecompleto)


// aula 2, operadores , contreole de fluxo , estruturas

// aqui estamos pedindo um numero para o usuario de 1 a 5 e mostra o valor em extenso , trabalhando c0om if e else if 
//parsenInt é para receber uma string e transformar em numero
//let numero = parseInt(prompt('inisira um numero de 1 a 5'))

//if (numero === 1){
    //console.log('um')
//}else if(numero === 2){
    //console.log('dois')
////}else if(numero === 3){
    //console.log('tres')
//}else if(numero === 4){
    //console.log('quatro')
//}else if(numero === 5){
    //console.log('cinco')
1//else{
    //console.log('numero errado , escolha de 1 a 5')
//}

//let numero = parseInt(prompt('inisira um numero de 1 a 100'))

//if (numero <= 10){
   // alert('o numero esta entre 0 e 10:' + numero)
//}else if(numero <=20){
  //  alert('o numero esta entre 11 e 20:' + numero)
//}else if(numero <=30){
  //  alert('o numero esta entre 21 e 30:' + numero)
//}//else if(numero <= 40){
  //  alert('o numero esta entre 31 e 40:' + numero)
//}


// let numero = parseInt(prompt('inisira um numero '))
// let numero2 = parseInt(prompt('inisira um numero '))
// let soma = numero + numero2
// console.log('o resultado é ' + soma )




//  let numero = parseInt(prompt('inisira o preço do produto '))

//  let ICMS = numero * 0.2
//  let total = ICMS + numero
//  console.log('o valor do ICMS em cima do produto sera  de ' + ICMS )
//  console.log('o valor final do seu produto sera de ' + total )




// const somaICMS = (produto1) => {return produto1 * 0.2}

// const calcularICMS = () => {
//   let resultado = 0
//   const produto1 = parseInt(prompt('Digite o valor do produto: '))

//   if (produto1 >= 1000){
//     return somaICMS = produto1 * 0.2
//   }else if (produto1 <= 999){
//     return somaICMS = produto1 * 0.2
//   }
  
// }
// console.log(calcularICMS)


// let resultado = 0

// function calcularICMS() {
//     const valorProd = parseInt(prompt('Digite o valor do produto: '))
//     const CEP = prompt('Digite seu cep para calcular o ICMS: ')
    

//     if (CEP === 'SP'){
//       return resultado = valorProd * 0.2
//     } else if (CEP === 'MG'){
//       return resultado = valorProd * 0.15
//     } else if (CEP === 'PR'){
//       return resultado = valorProd * 0.12
//     }
// }

// calcularICMS()
// console.log('o valor do ICMS do seu produto é de ' + resultado)

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
