
console.log("hola");

// valores para reflejarlos en pantalla. 
let numero = "0";

let input = '';

let arrInput = [];

//funcion para los numeros en el teclado y tomar su valor.

function Pulsar(valor) {

    console.log('haz pulsado el boton ' + valor);

    String(valor);

    input = input + valor;

    document.querySelector('#inputscreen').value = input;

    
}



document.querySelector('#sumar').addEventListener('click', ()=>{

    arrInput.push(input,'+');
    console.log(arrInput);
    document.querySelector('#pre-input').value = arrInput.join('');
    input = '';
    document.querySelector('#inputscreen').value = '0';
    

});





