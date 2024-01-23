/**
 * @author Jorge Ordiz Pérez (Estudiante)
 * @github
 */

// const $ = id => {return document.querySelector(id);}
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
const enviar = document.querySelector('#enviar');
const errores = document.querySelector('#errores');


//Header y hamburger menu

const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add('visible')
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
})


let mensajesErrores = []

//Funciones de validación

const validar = (e) => {
    e.preventDefault()
    mensajesErrores = []
    //Validar el nombre
    nombre.value.trim().length === 0 && mensajesErrores.push('El nombre es un campo obligatorio.')
    //Validar el apellido
    apellido.value.trim().length === 0 && mensajesErrores.push('El apellido es un campo obligatorio.')
    //Validar el teléfono
    !/^[679][0-9]{8}$/.test(telefono.value.trim()) && mensajesErrores.push('El teléfono no es válido, debe contener 8 dígitos y empezar por 6, 7 u 9.')
    //Validar email
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajesErrores.push('Introduce una dirección de correo electrónico válida.')
    //Validar el mensaje
    mensaje.value.trim().length < 10 && mensajesErrores.push('Mensaje demasiado corto, minimo 10 caracteres.')
    //ENVIAR O MOSTRAR MENSAJES DE ERROR

    if (mensajesErrores.length === 0 && confirm ("¿Estás seguro de enviar el formulario?")){
        formulario.submit()
    } else if (mensajesErrores.length > 0) {
        errores.textContent = ""
        console.log(mensajesErrores)
        mensajesErrores.forEach(function(mensaje){
            const miLi = document.createElement('li')
            miLi.textContent = mensaje
            errores.appendChild(miLi)
        })
    }

    //Evento correspondiente al botón de enviar


}

// enviar.addEventListener('click', () => {
//     if(mensajesErrores.length !== 0) {
//     errores.classList.remove('hide')
//     }
// })
formulario.addEventListener('submit', validar)

