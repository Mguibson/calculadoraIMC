const calcular = document.getElementById('calcular');

function imc () {

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if(valorIMC < 16) {
            classificacao = 'Magreza grau III'
        }else if (valorIMC < 16.9) {
            classificacao = 'Magreza grau II'
        }else if (valorIMC < 18.4) {
            classificacao = 'Magreza grau I'
        }else if (valorIMC < 24.9) {
            classificacao = 'Peso ideal'
        }else if (valorIMC < 29.9) {
            classificacao = 'Pré-obesidade'
        }else if ( valorIMC < 34.9){
            classificacao = 'Obesidade moderada'
        }else if (valorIMC < 39.9){
            classificacao = 'Obesidade severa'
        }else{
            classificacao = 'Obesidade muito severa'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} você está com ${classificacao}`;

    }else{
        resultado.textContent = 'Prencha todos os campos corretamente!'
    }
        
}

calcular.addEventListener('click', imc);