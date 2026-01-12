
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

if (!serviciosDisponibles.includes(servicioIngresado.toLowerCase())) {
  alert("No reconocemos ese servicio. Por favor, revisá el nombre.");
} else {
  alert("Excelente elección. Pronto te contactaremos por " + servicioIngresado);
}

const quiereServicios = confirm("¿Querés ver nuestros servicios principales?");

if (quiereServicios) {
  mostrarServicios(3);
} else {
  alert("Gracias por visitar RA Digital Studio");
}
