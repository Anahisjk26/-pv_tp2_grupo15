const paises = ['Buenos Aires', 'Brasilia', 'Santiago de chile', 'La Paz', 'Montevideo', 'Caracas' ];
let cap;
const devolverCap = document.getElementById('pais');

function capitales (devolverCap) {
    switch (devolverCap) {
        case Argentina: 
            capital: cap = paises[0];
            break;
        case Brasil:
            capital: cap = paises[1];
            break;
        case Chile: cap =  paises[2];
            break;
        case Bolivia: cap = paises[3];
            break;
        case Paraguay: cap = paises[4];
            break;
        case Venezuela: cap = paises[5];
            break;
        default:
            break;
    }
}
capital.textContent = cap;