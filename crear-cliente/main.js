

const abrirModal = document.querySelector('.btn-crear-cliente');
const modal = document.querySelector('#modal');
const cerrarModal = document.querySelector('.atras');;
const guardarCambios = document.querySelector('.guardar-cambios');

abrirModal.addEventListener('click',()=>{
    modal.showModal()
});

cerrarModal.addEventListener('click',()=>{
    console.log('JAJAJAJAJ')
    modal.close()
    
});


function crearCliente(){

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const nit = document.querySelector('#nit').value;
    const cuidad = document.querySelector('#cuidad').value;
    const contacto = document.querySelector('#contacto').value;
    const direccion = document.querySelector('#direccion').value;
    const telefono = document.querySelector('#telefono').value;
    const cupoTotal = document.querySelector('#cupo').value;
   

    tabla.innerHTML += ` 
    <tr>
        <td>${apellido} </td>
        <td>${nombre}</td>
        <td>${nit}</td>
        <td>${cuidad}</td>
        <td>${contacto}</td>
        <td>${direccion}</td>
        <td>${telefono}</td>
        <td>${cupoTotal}</td>
        <td>   <span class="material-symbols-outlined">
        edit
        </span>
        <span class="material-symbols-outlined" id="eliminar" >
        delete
        </span></td>
  </tr>
    `
}

guardarCambios.addEventListener('click',(event)=>{
    event.preventDefault();
    crearCliente();
    modal.close()
    
})
