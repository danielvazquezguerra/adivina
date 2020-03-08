console.log('hola');


let input = document.querySelector('#inputscreen').innerHTML;


function Pulsar(ev) {

    let x = document.createEvent('KeyboardEvent').key;
    console.log(x); 
    
}

document.addEventListener('keypress',(event)=>{
    console.log(event.charCode);
});
