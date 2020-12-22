window.addEventListener('load', start); //Carregando a pagina

//Buscando os elementos no DOM

    //Ranges Inputs

    let rangeRed = document.getElementById('rangeRed');
    let rangeGreen = document.getElementById('rangeGreen');
    let rangeBlue = document.getElementById('rangeBlue');

    //Inputs disabled
    let inputRed = document.getElementById('inputRed');
    let inputGreen = document.getElementById('inputGreen');
    let inputBlue = document.getElementById('inputBlue');


    // table
    let colorChallenge = document.querySelector('table');

    //Tela de resultado
    let displayResult = document.querySelector('.boxContent');


//


//Declaração de variaveis

    //Inputs Disabled
    let  manyInputs = [inputRed, inputGreen, inputBlue];


    //range Colors
    let severalRange = [rangeRed, rangeGreen, rangeBlue];



//




function start() {

    //Arrow Funcition da colorChallenge
    colorChallenge.addEventListener('input', () => {

        //Atribuindo valor de cada Range para cada Input
        inputRed.value = rangeRed.value;
        inputGreen.value = rangeGreen.value;
        inputBlue.value = rangeBlue.value;

        //Exibindo a Cor
        displayResult.style.backgroundColor = 'rgb(' + inputRed.value + ',' + inputGreen.value + ',' + inputBlue.value + ')';



    }); //fim da função colorChallenge()




} //Fim da função Start()



