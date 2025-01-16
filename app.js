'use strict'

const inputNombre = document.querySelector('#amigo');
const labelResultado = document.querySelector('#resultado');
const labelListaAmigo = document.querySelector('#listaAmigos');

let listaUsuario = [];


const limpiarInput = () => {

    inputNombre.value = "";

}



const mostrarAmigos = () => {

    let amigos = document.createElement('li');
    for (let i = 0; i < listaUsuario.length; i++) {
        amigos.innerHTML = `${listaUsuario[i]}<br>`;
    }

    labelListaAmigo.append(amigos);

}


const agregarAmigo = () => {

     labelResultado.innerHTML="";
    if (isNaN(inputNombre.value) && inputNombre != "") {
        listaUsuario.push(inputNombre.value);
        mostrarAmigos(listaUsuario);
    
    } else {
        alert('INGRESO NO VALIDO, RECUEDE INGRESAR UN NOMBRE');

    }

    limpiarInput();

}



const sortearAmigo = () => {

    if ((listaUsuario.length - 1) < 0) {
        labelResultado.style = "color:red";
        labelResultado.innerHTML = "ANTES DE SORTEAR, INGRESE SIQUIERA UN AMIGO.";


    } else {

        let indiceAmigoRandom = Math.floor(Math.random() * listaUsuario.length);

        labelResultado.style = "color:green";
        labelResultado.innerHTML = `Su amigo secreto es: ${listaUsuario[indiceAmigoRandom]}`;


    }


}




