
console.log("hola");

// valores para reflejarlos en pantalla. 
let numero = 0;

let input = '';

let preInput = document.querySelector('#pre-input');

//funcion para los numeros en el teclado y tomar su valor.

function Pulsar(valor) {

    console.log('haz pulsado el boton ' + valor);

    String(valor);

    input = input + valor;

    document.querySelector('#inputscreen').value = input;

    
}



document.querySelector('#sumar').addEventListener('click', ()=>{

    console.log(input);

    preInput.value = (`${input}+`);

});





