let edades = [ 2, 5, 10 , 18 , 45 , 50 , 78 ,90];

const calcularPromedio = (edades) => {
    let suma = 0;
    edades.forEach(edad => suma += edad);
    return suma / edades.length;
  };
  
  const promedioEdades = calcularPromedio(edades);
  console.log("El promedio de las edades es:", promedioEdades);
  
  const mostrarVector = (edades) => edades.forEach((value) => console.log(value)) ;
  mostrarVector(edades);