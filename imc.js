
const calcular = document.getElementById('calcular');

function calcularIMC (peso, altura){
    return peso / (altura * altura).toFixed(2);
}

function classificacaoIMC(valordoIMC){
    const classificacao = '';

    if(valordoIMC < 18.5){
        classificacao = 'abaixo do peso.';
    } else if (valordoIMC < 25){
        classificacao = 'com peso ideal. Parabéns :D';
    } else if (valordoIMC < 30){
        classificacao = 'levemente acima do peso';
    } else if (valordoIMC < 35){
        classificacao = 'com obesidade grau I.';
    } else if (valordoIMC < 40) {
        classificacao = 'com obesidade grau II';
    } else {
        classificacao = 'com obesidade grau III. Cuidado :x';
    }
    
    return 'testando' + classificacao;
}
function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = calculaIMC(peso, altura)
        
        let classificacao = classificacaoIMC(valorIMC);
       
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;
    } else{
        resultado.textContent = 'preencha todos os campos!!!';
    }
}

calcular.addEventListener('click',imc);
