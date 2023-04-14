// Elementos DOM necesarios

const 
    mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    btnLogin = document.getElementById('login'),
    btnAgregar=document.getElementById('agregarNota')
    contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles')

// Validación de usuario (Usando archivo .json)
    let array=[]
    let encontrado = fetch('maestros.json')
    .then(response => response.json())
    .then((data)=>{
        array=data
        validarUsuario(array)
        })
        
        function validarUsuario(array,mail,pass){
        console.log(array)
            let usuario = array.find(array => array.mail == mail);
            if (typeof usuario === 'undefined') {
                return false;
            } else {
                if (array.pass != pass) {
                    
                    return false;
                } else {
                    return usuario;
                    
                }
            }
        }

//Guardamos los datos que recuperamos de la database en el local storage

// btnLogin.addEventListener('click',()=>{
//     localStorage.setItem('email',emailLogin.value),
//     localStorage.setItem('pass', passwordLogin.value)
//     })



//Recupero los datos que se guardaron y los retorno

// function recuperarUsuario(localstorage) {
// let usuarioEnStorage = JSON.parse(localstorage.getItem('email'));
// return usuarioEnStorage;
// }

// function recuperarClave(localstorage) {
// let claveEnStorage = JSON.parse(localstorage.getItem('pass'));
// return claveEnStorage;
// }


// --------------------------------CREA HTML--------------------

// function mostrarInfoEstudiantes(array) {
// contTarjetas.innerHTML = '';
// array.forEach(element => {
//     let html = `<div class="card cardEstudiante" id="tarjeta${element.nombre}">
//             <h3 class="card-header" id="nombreEstudiante">Nombre: ${element.nombre}</h3>
//             <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotoEstudiante">
//             <div class="card-body">
//                 <p class="card-text" id="apellidoEstudiante">Apellido: ${element.apellido} </p>
//                 <p class="card-text" id="edadEstudiante">Edad: ${element.edad} años</p>
//                 <button type="submit" class="btn btn-primary" id="agregarNota" >agregarNota</button> 
//             </div>
//         </div>`;
//     contTarjetas.innerHTML += html;

// });
// }

// ---------------------------VISUALIZACIÓN-----------------------------

// function presentarInfo(array, clase) {
//     array.forEach(element => {
//         element.classList.toggle(clase);
//     });
// }

// --------------------------------------------------------------------


// Llamamamos al botón de login con el objeto del evento y usar preventDefault

// btnLogin.addEventListener('click', (evt) => {
//     evt.preventDefault();

    //Validamos que ambos campos estén completos.

//     if (!mailLogin.value || !passLogin.value) {
//         alert('Todos los campos son requeridos');
//     } else {
        
//         let data = validarUsuario(array, mailLogin.value, passLogin.value);

//         if (!data) {
//             alert(`Usuario o contraseña erróneos`);
//         } else {
//             //Muestro la info para usuarios logueados (con toggles)
//             mostrarInfoEstudiantes(estudiantes);
//             presentarInfo(toggles, 'd-none');
//         }
//     }
// });

//Limpiar los storages

// function borrarDatos() {
//     localStorage.clear();
//     sessionStorage.clear();
// }
