import { getData, convertTemperatures } from "./conversion.js";
import { displayResult } from "./newHTML.js";

export function performConversion(key) {
    if (key.key == "Enter") {
        key.preventDefault();
        
        const receivedData = getData();
        const conversion = convertTemperatures(receivedData);
        displayResult(conversion);
    }
}

export function clearData(key) {
    if (key.key == "Escape") {
        const inputNumber = document.getElementById('number');
        const newHTML = document.getElementById('newHTML');

        inputNumber.value = "";
        document.getElementById('InitialTemperature').value = "C";
        document.getElementById('FinalTemperature').value = "C";
        newHTML.innerHTML = "";

        inputNumber.focus();
    }
}