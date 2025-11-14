const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const agregaContacto = document.querySelector('.formulario__boton');
const listadoContactos = document.querySelector('.listado');

const db = window.localStorage
cargarContactos(db, listadoContactos);

agregaContacto.addEventListener('click', () => {
    const nombreVal = (nombre?.value || '').trim();
    const numeroVal = (numero?.value || '').trim();
    const direccionVal = (direccion?.value || '').trim();

    if (!nombreVal || !numeroVal || !direccionVal) {
        alert('Completa nombre, número y dirección antes de agregar.');
        return;
    }

    const contacto = {
        id: Date.now(), // ID único
        nombre: nombreVal,
        numero: numeroVal,
        direccion: direccionVal
    };

    guardarContacto(db, contacto)

    nombre.value = "";
    numero.value = "";
    direccion.value = "";
})
