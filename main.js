import { getData, convertTemperatures } from "./conversion.js";
import { displayResult } from "./newHTML.js";
import { clearData, performConversion } from "./shortcutKeys.js";

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const receivedData = getData();
    const conversion = convertTemperatures(receivedData);
    displayResult(conversion);
});

document.addEventListener("keydown", (event) => {
    clearData(event);
    performConversion(event);
});
