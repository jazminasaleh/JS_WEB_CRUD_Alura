import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]')
const obtenerInformacion = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        window.location.href = "./screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    clientServices.detalleCliente(id).then( ({nombre, email}) =>{
        nombre.value = respuesta.nombre;
        email.value = respuesta.email;
    })
};
obtenerInformacion();

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, email);
    clientServices.actualizarCliente(nombre, email, id).then(() =>{
        window.location.href = "/screens/edicion_concluida.html"
    })

});
