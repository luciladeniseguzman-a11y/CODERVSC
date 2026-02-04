document.addEventListener("DOMContentLoaded", () => {

  if (document.getElementById("encabezadopaginaprincipal")) {
    ejecutarInicio();
  }

  if (document.getElementById("mensaje")) {
    ejecutarContacto();
  }
});

function ejecutarInicio() {
  const btnSaludar = document.getElementById("btnSaludar");
  const btnServicio = document.getElementById("btnServicio");
  const btnVerServicios = document.getElementById("btnVerServicios");

  const inputNombre = document.getElementById("nombreUsuario");
  const selectServicio = document.getElementById("servicio");
  const resultado = document.getElementById("resultadoInicio");
  const listaServicios = document.getElementById("listaServicios");

  const serviciosDisponibles = ["gestion de redes", "planificacion", "publicidad"];

  btnSaludar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
      resultado.textContent = "Por favor, ingresá tu nombre.";
      return;
    }

    resultado.textContent = `Hola ${nombre}, bienvenido/a a RA Digital Studio 😊`;
  });

  btnServicio.addEventListener("click", () => {
    const servicio = selectServicio.value;

    if (!serviciosDisponibles.includes(servicio)) {
      resultado.textContent = "No reconocemos ese servicio.";
    } else {
      resultado.textContent = `Excelente elección. Pronto te contactaremos por ${servicio}.`;
    }
  });

  btnVerServicios.addEventListener("click", () => {
    listaServicios.innerHTML = "";

    serviciosDisponibles.forEach(servicio => {
      const li = document.createElement("li");
      li.textContent = servicio;
      listaServicios.appendChild(li);
    });
  });
}

function ejecutarContacto() {
  const fechasOcupadas = ["2026-01-19", "2026-01-20", "2026-01-25"];

  const inputFecha = document.getElementById("fechaServicio");
  const btnReservar = document.getElementById("btnReservar");
  const textarea = document.getElementById("mensaje");
  const resultado = document.getElementById("resultadoContacto");

  btnReservar.addEventListener("click", () => {
    const fecha = inputFecha.value;

    if (!fecha) {
      resultado.textContent = "Elegí una fecha.";
      return;
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const fechaSeleccionada = new Date(fecha);

    if (fechaSeleccionada < hoy) {
      resultado.textContent = "La fecha ingresada ya pasó.";
      return;
    }

    if (fechasOcupadas.includes(fecha)) {
      resultado.textContent = "Esa fecha ya está ocupada.";
      return;
    }

    resultado.textContent = "Fecha disponible ✔️";
    textarea.value =
      `Hola! Me gustaría contratar un servicio.\n` +
      `Fecha solicitada: ${fecha}\n\n`;
  });
}
