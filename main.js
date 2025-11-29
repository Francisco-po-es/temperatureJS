// Import all the functions from every JS file.
import { getData, convertTemperatures } from "./conversion.js";
import { displayResult } from "./newHTML.js";
import { clearData, performConversion } from "./shortcutKeys.js";

// Handle conversion when the button is clicked.
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const receivedData = getData();
    const conversion = convertTemperatures(receivedData);
    displayResult(conversion);
});

// Implement shortcuts Keys.
document.addEventListener("keydown", (event) => {
    clearData(event); // Escape key
    performConversion(event); // Enter shortcuts
});
