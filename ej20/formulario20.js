import { obtenerPaises, actualizarCapitales } from "./functions.js";

export const inicializarFormulario = () => {
  const paises = document.getElementById("paises");
  const capitales = document.getElementById("capitales");

  obtenerPaises(paises);

  paises.addEventListener("change", () => {
    const paisSeleccionado = paises.value;
    actualizarCapitales(paisSeleccionado, capitales);
  });
};