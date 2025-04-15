document.addEventListener('DOMContentLoaded', () => {
    const cambiarColorBtn = document.getElementById('cambiarColorBtn');
    const body = document.body;
    const colores = ['#f44336', '#2196f3', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4']; 

    cambiarColorBtn.addEventListener('click', () => {
      
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        const nuevoColor = colores[indiceAleatorio];
        body.style.backgroundColor = nuevoColor;
        console.log(`Color de fondo cambiado a: ${nuevoColor}`);
    });
});