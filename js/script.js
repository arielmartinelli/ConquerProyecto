document.addEventListener("DOMContentLoaded", () => {
  const selectPais = document.getElementById("selectPais");
  const tituloZona = document.getElementById("tituloZona");
  const toggleMenu = document.getElementById("toggleMenu");
  const sidebarLinks = document.getElementById("sidebarLinks");

  // Elementos de horario de las 4 clases
  const horarios = [
    document.getElementById("horario1"),
    document.getElementById("horario2"),
    document.getElementById("horario3"),
    document.getElementById("horario4"),
  ];

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

    // Actualiza título con bandera
    tituloZona.innerHTML = `<img src="${imagen}" width="24" class="me-2 rounded"> ${nombre}`;

    // Actualiza todos los horarios
    horarios.forEach(h => {
      h.innerHTML = `<img src="${imagen}" width="24" class="me-2 rounded"> Horario: <strong>${hora}</strong>`;
    });
  }

  selectPais.addEventListener("change", actualizarVista);
  actualizarVista();

  // Menú responsive (móvil)
  toggleMenu?.addEventListener("click", () => {
    sidebarLinks.classList.toggle("show");
  });
});
