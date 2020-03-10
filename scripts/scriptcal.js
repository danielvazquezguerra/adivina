console.log('hola');
document.querySelector('#inputscreen').focus();

let arrInput = [];


let Pulsar = (num)=>{

    let input = document.querySelector('#inputscreen').value;
    console.log(num);
    input = String(input + num);
    console.log(input);
    document.querySelector('#inputscreen').value = input;

};

document.querySelector('#sumar').addEventListener('click',()=> {
    arrInput.push(document.querySelector('#inputscreen').value);
    console.log(arrInput);
});


document.querySelector('#equal').addEventListener('click', ()=>{

    let resultado = eval(document.querySelector('#inputscreen').value);
    resultado = resultado.toFixed(2);
    resultado = parseFloat(resultado);
    document.querySelector('#inputscreen').value = resultado;

});
