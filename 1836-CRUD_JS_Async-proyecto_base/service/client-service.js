//*Hacer la comunicacion con el servido, recibe una respuesta y genera un json
const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());


const crearCliente = (nombre, email) =>{
  fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email})
  })
}

export const clientServices = {
  listaClientes,
};








