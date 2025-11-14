const CONTACT_PREFIX = 'contacto:';

const guardarContacto = (db, contacto) => {
    const key = `${CONTACT_PREFIX}${contacto.id}`;
    db.setItem(key, JSON.stringify(contacto));
    cargarContactos(db, document.querySelector('.listado'));
}

const cargarContactos = (db, parentNode) => {
    parentNode.innerHTML = "";
    let claves = Object.keys(db).filter(e => e.startsWith(CONTACT_PREFIX))

    for (const clave of claves) {
        let raw = db.getItem(clave);
        if (!raw) continue;

        let contacto;
        try {
            contacto = JSON.parse(raw);
        } catch {
            continue;
        }

        if (!contacto || !contacto.nombre || !contacto.numero || !contacto.direccion) {
            continue;
        }
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
        const key = `${CONTACT_PREFIX}${contacto.id}`;
        db.removeItem(key);
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

