const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto));
    cargarContactos(db, document.querySelector('.listado'));
}

const cargarContactos = (db, parentNode) => {
    parentNode.innerHTML = "";
    let claves = Object.keys(db)

    for (const clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete_forever'

    iconoBorrar.addEventListener('click', () => {
        db.removeItem(contacto.id)
        cargarContactos(db, parentNode);
    })

    divContacto.classList.add('listado__contacto')
    iconoBorrar.classList.add('material-symbols-outlined', 'listado__icono')

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}

