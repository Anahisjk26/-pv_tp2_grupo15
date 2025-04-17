const $form = document.querySelector('form');
$form.addEventListener ( 'submit', function(e){
    e.preventDefault();
    return false;
})

//------------------------
const paises = ['Buenos Aires', 'Brasilia', 'Santiago de chile', 'La Paz', 'Montevideo', 'Caracas' ];

const devolverCap = document.getElementById('pais');


paises.addEventListener("change", function () {

capitales.innerHTML = '<option value="">--Selecciona una capital--</option>';
if (paisSeleccionado) {
    capitales.disabled = false;
    const capital = data[paisSeleccionado];
    const option = document.createElement("option");
    option.value = capital.toLowerCase(); 
    option.textContent = capital; 
    capitales.appendChild(option); 
    console.log(`País seleccionado: ${paisSeleccionado.toUpperCase()}`);
    console.log(`Capital seleccionada: ${capital}`);
} else {
    capitales.disabled = true;
}