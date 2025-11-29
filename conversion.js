// Collect the variables from the form
export function getData() {
    // Get the value for the choose elements. 
    let number = parseInt(document.getElementById('number').value);
    let initialTemp = document.getElementById('InitialTemperature').value;
    let finalTemp = document.getElementById('FinalTemperature').value;

    return {
        number, initialTemp, finalTemp
    };
}

// Perform the conversion from one temperature to another one.
export function convertTemperatures(data) {
    let result;

    // Make the conversion for every case.
    if (data.initialTemp == 'C' && data.finalTemp == 'F') {
        result = (data.number * 9) / 5 + 32;
    } else if (data.initialTemp == 'C' && data.finalTemp == 'K') {
        result = data.number + 273.15;
    } else if (data.initialTemp == 'F' && data.finalTemp == 'C') {
        result = 5 * (data.number - 32) / 9;
    } else if (data.initialTemp == 'F' && data.finalTemp == 'K') {
        result = 5 * (data.number - 32) / 9 + 273.15;
    } else if (data.initialTemp == 'K' && data.finalTemp == 'C') {
        result = data.number - 273.15;
    } else if (data.initialTemp == 'K' && data.finalTemp == 'F') {
        result = (data.number - 273.15) * 9 / 5 + 32;
    } else {
        alert("Invalid temperature combination."); // If the user choose the same unit.
        result = "Unavailable.";
    }

    return result;
}