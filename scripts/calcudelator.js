
console.log("hola");

// valores para reflejarlos en pantalla. 
let numero = "0";

let input = '';

let arrInput = [];

let arrCalculo = [];

let resultado = 0;

//funcion para los numeros en el teclado y tomar su valor.

function Pulsar(valor) {

    console.log('haz pulsado el boton ' + valor);

    String(valor);

    input = input + valor;

    document.querySelector('#inputscreen').value = input;

    
}



document.querySelector('#sumar').addEventListener('click', ()=>{

    
    arrCalculo.push(parseFloat(input));
    input = parseFloat(input);
    resultado = resultado + input;
    console.log(resultado);
    console.log(arrCalculo);
    arrInput.push('+',input);
    console.log(arrInput);
    document.querySelector('#pre-input').value = arrInput.join('');
    input = '';
    document.querySelector('#inputscreen').value = '0';
    
    
});

document.querySelector('#restar').addEventListener('click', ()=>{

    
    arrCalculo.push(parseFloat(input));
    input = parseFloat(input);
    resultado = resultado - input;
    console.log(resultado);
    console.log(arrCalculo);
    arrInput.push(input,'-');
    console.log(arrInput);
    document.querySelector('#pre-input').value = arrInput.join('');
    input = '';
    document.querySelector('#inputscreen').value = '0';
    
    
});


document.querySelector('#dividir').addEventListener('click', ()=>{

    
    arrCalculo.push(parseFloat(input));
    input = parseFloat(input);
    resultado = resultado + input;
    console.log(resultado);
    console.log(arrCalculo);
    arrInput.push('/',input);
    console.log(arrInput);
    document.querySelector('#pre-input').value = arrInput.join('');
    input = '';
    document.querySelector('#inputscreen').value = '0';
    
    
});


document.querySelector('#equal').addEventListener('click', ()=>{

    console.log('haz pulsado igual.')
    arrInput = arrInput.join('');
    console.log(arrInput);
    console.log(resultado);
    document.querySelector('#inputscreen').value = resultado;
    localStorage.setItem(JSON.stringify(arrInput),JSON.stringify(resultado));

});


document.querySelector('#clear').addEventListener('click', ()=>{
    input = '';
    arrInput = [];
});