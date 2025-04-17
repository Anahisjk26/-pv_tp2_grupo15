const initialBackgroundColor = '#f9f9f9'; // Definir aquí

export function cambio ( inputText , outputContainer ){
    inputText.addEventListener('input', function() {
    const text = inputText.value;
    outputContainer.textContent = text;

    if (text.length > 20) {
        outputContainer.style.backgroundColor = 'darkslategray';
    } else {
        outputContainer.style.backgroundColor = initialBackgroundColor;
    }

    });
}