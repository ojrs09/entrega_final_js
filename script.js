// Elementos DOM necesarios

const
    btnLogin = document.getElementById('login'),
    btnAgregar = document.getElementById('agregarNota')
contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles'),
    form = document.querySelector(".login")

// Librería
Swal.fire('Bienvenido a tu programa de estudiantes')

// Array de estudiantes (se hizo así ya que los maestros los hice con fetch, así tengo ambas vias)

const estudiantes = [{
    nombre: 'Omar',
    apellido: 'Romero',
    edad: 15,
    estatura: 1.62,
    img: './multimedia/web_of_Spider-Man_Vol_1_129.1_Sin_texto.webp'
},
{
    nombre: 'Karla',
    apellido: 'Casanas',
    edad: 14,
    estatura: 1.25,
    img: './multimedia/sailor-moon.jpg'
},
{
    nombre: 'Edward',
    apellido: 'Bastidas',
    edad: 12,
    estatura: 1.45,
    img: './multimedia/guUYd44L_400x400.png'
},
{
    nombre: 'Yeespri',
    apellido: 'Morales',
    edad: 17,
    estatura: 1.65,
    img: './multimedia/descarga.jpg'
},
{
    nombre: 'Diosa',
    apellido: 'Yglesias',
    edad: 15,
    estatura: 1.49,
    img: './multimedia/Jean_Francois_Armand_Felix_Bernard_-_Fortuna.jpg'
},
{
    nombre: 'Juan',
    apellido: 'Casanas',
    edad: 12,
    estatura: 1.27,
    img: './multimedia/Unnamed_29.webp'
}]

// Agrego elementos necesarios al formulario y validación de usuarios

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const mailLogin = document.getElementById('emailLogin').value
    const passLogin = document.getElementById('passwordLogin').value

    fetch('./maestros.json')

        .then(response => response.json())
        .then((data) => {
            validarUsuario(data, mailLogin, passLogin)
        })
})

function validarUsuario(array, mail, pass) {

    console.log(array)
    let usuario = array.find(maestro => maestro.mail == mail);

    if (typeof usuario === 'undefined') {
        // return false;
        // alert('Ingreso incorrecto')
        Swal.fire('Ingreso incorrecto')
    } else {
        if (usuario.pass != pass) {
            // alert ('ingreso incorrecto')
            // return false;
            Swal.fire('Ingreso incorrecto')
        } else {
            // return usuario;
            mostrarInfoEstudiantes(estudiantes);
            presentarInfo(toggles, 'd-none');
            Swal.fire('Ingreso exitoso')
        }
    }
}

// --------------------------------CREA HTML--------------------

function mostrarInfoEstudiantes(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card cardEstudiante" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombreEstudiante">Nombre: ${element.nombre}</h3>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotoEstudiante">
                <div class="card-body">
                    <p class="card-text" id="apellidoEstudiante">Apellido: ${element.apellido} </p>
                    <p class="card-text" id="edadEstudiante">Edad: ${element.edad} años</p>
                    <button type="submit" class="btn btn-primary" id="agregarNota" >agregarNota</button>
                    <button type="submit" class="btn btn-primary" id="verNota" >ver notas</button> 
                </div>
            </div>`;
        contTarjetas.innerHTML += html;

    });
}

// ---------------------------VISUALIZACIÓN-----------------------------

function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

//Limpiar los storages

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}
