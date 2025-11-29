export function displayResult(total) {
    const newHTML = document.getElementById('newHTML');
    newHTML.innerHTML = "<span>Resultado: </span>" + total;
    newHTML.classList.add('newStyleHTML');
}