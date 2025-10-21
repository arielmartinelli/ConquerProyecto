document.addEventListener("DOMContentLoaded", () => {
  const selectPais = document.getElementById("selectPais");
  const horario = document.getElementById("horario");
  const tituloZona = document.getElementById("tituloZona");

  const data = {
    es: { nombre: "Europa", imagen: "css/img/españa.png", hora: "20:00 - 21:30" },
    us: { nombre: "EE.UU.", imagen: "css/img/eeuu.png", hora: "14:00 - 15:30" },
    mx: { nombre: "México", imagen: "css/img/mexico.png", hora: "12:00 - 13:30" },
    ar: { nombre: "Argentina", imagen: "css/img/arg.png", hora: "15:00 - 16:30" },
    cl: { nombre: "Chile", imagen: "css/img/chile.png", hora: "15:00 - 16:30" },
    pe: { nombre: "Perú", imagen: "css/img/peru.png", hora: "13:00 - 14:30" },
  };

  function actualizarVista() {
    const pais = selectPais.value;
    const { nombre, imagen, hora } = data[pais];

    // Actualiza la zona y bandera
    tituloZona.innerHTML = `<img src="${imagen}" width="24" class="me-2 rounded"> ${nombre}`;

    // Actualiza el horario y bandera
    horario.innerHTML = `<img src="${imagen}" width="24" class="me-2 rounded"> Horario: <strong>${hora}</strong>`;
  }

  selectPais.addEventListener("change", actualizarVista);
  actualizarVista();
});
