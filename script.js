function getData() {
    let number = parseInt(document.getElementById('number').value);
    let initialTemp = document.getElementById('InitialTemperature').value;
    let finalTemp = document.getElementById('FinalTemperature').value;

    return {
        number, initialTemp, finalTemp
    };
}

function convertTemperatures(data) {
    let result;

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
        alert("Invalid temperature combination.");
        result = "Unavailable.";
    }
    
    return result;
}

function displayResult(total) {
    const newHTML = document.getElementById('newHTML');
    newHTML.innerHTML = "<span>Result: </span>" + total;
    newHTML.classList.add('newStyleHTML');
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const receivedData = getData();
    const conversion = convertTemperatures(receivedData);
    displayResult(conversion);
});

function performConversion(key) {
    if (key.key == "Enter") {
        const receivedData = getData();
        const conversion = convertTemperatures(receivedData);
        displayResult(conversion);
    }
}

function clearData(key) {
    if (key.key == "Escape") {
        document.getElementById('number').value = "";
        document.getElementById('InitialTemperature').value = "C";
        document.getElementById('FinalTemperature').value = "C";
        const newHTML = document.getElementById('newHTML');
        newHTML.innerHTML = "";
    }
}

document.addEventListener("keydown", (event) => {
    clearData(event);
    performConversion(event);
});
