document.addEventListener("DOMContentLoaded", () => {
    /*Formulario*/

  const $form = document.querySelector("#form")
  const $botonMail = document.querySelector("#mail")

  $form.addEventListener('submit', enviarMail)
  
  function enviarMail(event) {
    event.preventDefault()
    const form = new FormData(this)
    $botonMail.setAttribute('href', `mailto:gabriel.molina@unahur.edu.ar?subject=Registro Evento Virbela 
    &body=Hola!%0D%0ATe dejo mis datos para la inscripcion al evento: 
    %0D%0ANombre y Apellido: ${form.get("nombre")} ${form.get("apellido")}
    %0D%0AEmpresa: ${form.get("compania")}
    %0D%0AMail de contacto: ${form.get("email")}
    %0D%0AMuchas Gracias.`)
    $botonMail.click()
  };

})