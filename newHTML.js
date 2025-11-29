// Make the new HTML part.
export function displayResult(total) {
    const newHTML = document.getElementById('newHTML'); // Select the hidden div
    newHTML.innerHTML = "<span>Result: </span>" + total; // Write the new information
    newHTML.classList.add('newStyleHTML'); // Apply the new CSS.
}