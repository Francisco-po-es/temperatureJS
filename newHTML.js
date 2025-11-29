export function displayResult(total) {
    const newHTML = document.getElementById('newHTML');
    newHTML.innerHTML = "<span>Result: </span>" + total;
    newHTML.classList.add('newStyleHTML');
}