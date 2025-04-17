export const data = {
  argentina: "Buenos Aires",
  brasil: "Brasilia",
  chile: "Santiago",
  colombia: "Bogotá",
  mexico: "Ciudad de México",
  peru: "Lima"
};

export const obtenerPaises = (paisesSelect) => {
  for (const pais in data) {
    const option = document.createElement("option");
    option.value = pais;
    option.textContent = pais.charAt(0).toUpperCase() + pais.slice(1);
    paisesSelect.appendChild(option);
  }
};

export const actualizarCapitales = (paisSeleccionado, capitalesSelect) => {
  capitalesSelect.innerHTML = '<option value="">--Selecciona una capital--</option>';

  if (paisSeleccionado) {
    capitalesSelect.disabled = false;
    const capital = data[paisSeleccionado];
    const option = document.createElement("option");
    option.value = capital.toLowerCase();
    option.textContent = capital;
    capitalesSelect.appendChild(option);

    console.log(`País seleccionado: ${paisSeleccionado.toUpperCase()}`);
    console.log(`Capital seleccionada: ${capital}`);
  } else {
    capitalesSelect.disabled = true;
  }
};