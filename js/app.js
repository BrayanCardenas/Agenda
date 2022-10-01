const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const agregaContacto = document.querySelector('.formulario__boton')/* 

const template = document.querySelector('#contacto').content
const fragment = document.createDocumentFragment() */

const listadoContactos = document.querySelector('.listado')

const db = window.sessionStorage

agregaContacto.addEventListener('click', () =>{
    let contacto = {
        id: Math.random(1,10),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value
    }

    guardarContacto(db, contacto)
})

cargarContactos(db, listadoContactos);