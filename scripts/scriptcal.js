console.log('hola');

let input = document.querySelector('#inputscreen').value;

let Pulsar = (num)=>{
    console.log(num);
    input = String(input + num);
    console.log(input);
    document.querySelector('#inputscreen').value = input;

};


document.querySelector('#equal').addEventListener('click', ()=>{

    let resultado = eval(document.querySelector('#inputscreen').value);
    document.querySelector('#inputscreen').value = resultado;

});
