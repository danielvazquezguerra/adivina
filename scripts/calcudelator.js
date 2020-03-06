
console.log("hola");

// valores para reflejarlos en pantalla. 
let numero = "0";

let input = '';

let arrInput = [0];

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
    input = '';
    document.querySelector('#inputscreen').value = '0';

});





