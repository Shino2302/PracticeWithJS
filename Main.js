'use strict';

const construct = document.querySelector('.Main');

let pruebaFuncion = () =>{
    let tuNombre = prompt('Ingresa tu nombre');
    let parteDelDom = document.createElement('div'); 
    parteDelDom.classList.add('divJS');
    parteDelDom.innerHTML =`<h1>Hola ${tuNombre === "" ? "Mundo" : tuNombre}</h1>`;
    construct.appendChild(parteDelDom);   
};

pruebaFuncion();
