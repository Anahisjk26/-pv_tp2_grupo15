const nombres = ["Ana", "Jesica", "Carlos", "Juan", "Alejandro", "Isabella"];

const obtenerNombreMasLargo = (nombres) => {
  let nombreMasLargo = "";
  nombres.forEach(nombre => {
    if (nombre.length > nombreMasLargo.length) {
      nombreMasLargo = nombre;
    }
  });
  return nombreMasLargo;
};

const nombreLargo = obtenerNombreMasLargo(nombres);
console.log("El nombre más largo es:", nombreLargo);

const mostrarNombres = (nombres) => nombres.forEach(nombre => console.log(nombre));
console.log("\nLista de nombres:");
mostrarNombres(nombres);