const calcularMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
      console.log(`El número ${numero1} es mayor que el número ${numero2}`);
    } else if (numero2 > numero1) {
     console.log(`El número ${numero2} es mayor que el número ${numero1}`);
    } else {
      console.log(`El número ${numero1} es igual al número ${numero2}`);
    }
  };
  
  calcularMayor(10, 5);
  calcularMayor(3, 7);
  calcularMayor(9, 9);
  calcularMayor(15, 2);
  calcularMayor(4, 4);