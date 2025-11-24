function obtenerDatos() {
    let numero = parseInt(document.getElementById('numero').value);
    let primeratemp = document.getElementById('TemperaturaInicial').value;
    let segundatemp = document.getElementById('TemperaturaFinal').value;

    return {
        numero, primeratemp, segundatemp
    };
}

function conversionTemperaturas(datos) {
    let resultado;

    if (datos.primeratemp == 'C' && datos.segundatemp == 'F'){
        resultado = (datos.numero * 9) / 5 + 32;
    } else if (datos.primeratemp == 'C' && datos.segundatemp == 'K'){
        resultado = datos.numero + 273.15;
    } else if (datos.primeratemp == 'F' && datos.segundatemp == 'C'){
        resultado = 5 * (datos.numero - 32) / 9;
    } else if (datos.primeratemp == 'F' && datos.segundatemp == 'K'){
        resultado = 5 * (datos.numero - 32) / 9 + 273.15;
    } else if (datos.primeratemp == 'K' && datos.segundatemp == 'C'){
        resultado = datos.numero - 273.15;
    } else if (datos.primeratemp == 'K' && datos.segundatemp == 'F'){
        resultado = (datos.numero - 273.15) * 9 / 5 + 32;
    } else {
        alert("Combinación de temperatura no válida.");
        resultado = "No hay.";
    };
    
    return resultado;
}

function textoResultado(total) {
	const nuevoHTML = document.getElementById('nuevoHTML');
	nuevoHTML.innerHTML = "<span>Resultado: </span>" + total;
    nuevoHTML.classList.add('nuevoEstiloHTML');
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const datosRecibidos = obtenerDatos();
    const conversion = conversionTemperaturas(datosRecibidos);
    textoResultado(conversion);
});

function realizarConversion(tecla) {
    if (tecla.key == "Enter") {
        const datosRecibidos = obtenerDatos();
        const conversion = conversionTemperaturas(datosRecibidos);
        textoResultado(conversion);
    };
}

function limpiarDatos(tecla) {
    if (tecla.key == "Escape") {
        document.getElementById('numero').value = "";
        document.getElementById('TemperaturaInicial').value = "C";
        document.getElementById('TemperaturaFinal').value = "C";
        const nuevoHTML = document.getElementById('nuevoHTML')
        nuevoHTML.innerHTML = "";
    };
}

document.addEventListener("keydown", (event) => {
    limpiarDatos(event);
    realizarConversion(event);
});