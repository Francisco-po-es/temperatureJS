// Import the necessary functions for conversion process.
import { getData, convertTemperatures } from "./conversion.js";
import { displayResult } from "./newHTML.js";

// 'Enter' keyboard shortcut.
export function performConversion(key) {
    // If the key pressed is Enter...
    if (key.key == "Enter") {
        // Disable the default behaviors from this key.
        key.preventDefault();
        
        // Perform the conversion.
        const receivedData = getData();
        const conversion = convertTemperatures(receivedData);
        displayResult(conversion);
    }
}

// 'Escape' keyboard shortcut.
export function clearData(key) {
    // If the key pressed is 'Escape'...
    if (key.key == "Escape") {
        // Get the elements.
        const inputNumber = document.getElementById('number');
        const newHTML = document.getElementById('newHTML');

        // Clean all the values.
        inputNumber.value = "";
        document.getElementById('InitialTemperature').value = "C";
        document.getElementById('FinalTemperature').value = "C";
        newHTML.innerHTML = "";

        //Set focus to the input field.
        inputNumber.focus();
    }
}