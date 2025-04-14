

let km = parseInt(prompt("Ingrese el número de kilómetros recorridos:"));
let litros = parseInt(prompt("Ingrese el número de litros consumidos:"));
let consumo = litros / km;
if (km <= 0 || litros <= 0) {
    alert("Los valores deben ser mayores que cero.");

} else {

    alert("El consumo de combustible es de " + consumo + " litros por kilómetro.");
}
