document.addEventListener("DOMContentLoaded", () => {

  if (document.getElementById("encabezadopaginaprincipal")) {
    ejecutarInicio();
  }

 
  if (document.getElementById("mensaje")) {
    ejecutarContacto();
  }
});


function ejecutarInicio() {

  function saludar(nombre) {
    alert("Hola " + nombre + ", bienvenido/a a RA Digital Studio");
  }

  function mostrarServicios(cantidad) {
    const servicios = ["gestion de redes", "planificacion", "publicidad"];
    for (let i = 0; i < cantidad && i < servicios.length; i++) {
      alert("Servicio: " + servicios[i]);
    }
  }

  const nombreUsuario = prompt("¿Cuál es tu nombre?");
  if (nombreUsuario && nombreUsuario.trim() !== "") {
    saludar(nombreUsuario);
  }

  const servicioIngresado = prompt(
    "¿Qué servicio estás buscando? (gestión de redes, planificación o publicidad)"
  );

  const serviciosDisponibles = ["gestion de redes", "planificacion", "publicidad"];

  if (!serviciosDisponibles.includes(servicioIngresado?.toLowerCase())) {
    alert("No reconocemos ese servicio.");
  } else {
    alert("Excelente elección. Pronto te contactaremos por " + servicioIngresado);
  }

  const quiereServicios = confirm("¿Querés ver nuestros servicios principales?");
  if (quiereServicios) {
    mostrarServicios(3);
  } else {
    alert("Gracias por visitar RA Digital Studio");
  }
}

// CONTACTO
function ejecutarContacto() {
  const textarea = document.getElementById("mensaje");

  const fechaReservada = reservarServicio();

  if (fechaReservada) {
    textarea.value =
      `Hola! Me gustaría contratar un servicio.\n` +
      `Fecha solicitada: ${fechaReservada}\n\n`;
  }
}

function reservarServicio() {
  const fechasOcupadas = ["2026-01-19", "2026-01-20", "2026-01-25"];

  const fecha = prompt(
    "¿En qué fecha te gustaría contratar el servicio? (AAAA-MM-DD)"
  );

  if (!fecha) return null;

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const fechaSeleccionada = new Date(fecha);

  if (fechaSeleccionada < hoy) {
    alert("La fecha ingresada ya pasó.");
    return null;
  }

  if (fechasOcupadas.includes(fecha)) {
    alert("Esa fecha ya está ocupada.");
    return null;
  }

  alert("Fecha disponible. Podés continuar y escribirnos 👇");
  return fecha;
}
