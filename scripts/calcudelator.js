
console.log("hola");

let numero = 0;

let input = '';



function pulsar(valor) {

    console.log('haz pulsado el boton ' + valor);

    String(valor);

    input = input + valor;

    document.getElementById('inputscreen').value = input;
    
}



