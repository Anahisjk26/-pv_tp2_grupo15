
const radioButtons = document.querySelectorAll('input[name="lenguaje"]');

const resultadoSpan = document.getElementById('lenguajeSeleccionado');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
        const lenguajeSeleccionado = this.value;

        resultadoSpan.textContent = lenguajeSeleccionado;

        console.log('Lenguaje seleccionado:', lenguajeSeleccionado);
    });
});