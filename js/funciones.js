const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify( contacto));
   /*  window.location.href = '/';*/
} 

const cargarContactos = (db, parentNode) =>{
    let claves = Object.keys(db)
    /* console.log(claves) */ 

    for (const clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db) 
    }
}

const crearContacto = (parentNode, contacto, db) => {

    /* template.querySelector('#nombre').textContent = contacto.nombre
    template.querySelector('#numero').textContent = contacto.numero
    template.querySelector('#direccion').textContent = contacto.direccion
      
    const clone = template.cloneNode(true)
    
    fragment.appendChild(clone)
    
    listadoContactos.appendChild(fragment)

    let borrarContacto = document.querySelector('.listado__icono')

    borrarContacto.addEventListener( 'click', () => {
        db.removeItem(contacto.id)
        window.location.href = '/';
    }) */


    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete_forever'

    iconoBorrar.addEventListener( 'click', () => {
        db.removeItem(contacto.id)
        window.location.href = '/';
    })

    divContacto.classList.add('listado__contacto')
    iconoBorrar.classList.add('material-symbols-outlined', 'listado__icono')

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}

