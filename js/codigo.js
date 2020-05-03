let match;
let match2;//para finaliza y empieza
let arrayMatch;
let matchAlterado;
let mensaje;

function iniciar() {
    document.getElementById("submitCapitaliza").addEventListener("click", capitaliza);
    document.getElementById("submitInvierte").addEventListener("click", invierte);
    document.getElementById("submitCamelCase").addEventListener("click", camelCase);
    document.getElementById("submitSinCamelCase").addEventListener("click", sinCamelCase);
    document.getElementById("submitFinaliza").addEventListener("click", finaliza);
    document.getElementById("submitEmpieza").addEventListener("click", empieza);
    document.getElementById("submitDNI").addEventListener("click", dni);
    document.getElementById("submitMatriculas").addEventListener("click", matriculas);
}

let capitaliza = function () {
    match = document.getElementById("inputCapitaliza").value.trim();
    return this.nextElementSibling.textContent = match.replace(/\b\w/g, t => t.toUpperCase());
}

let invierte = function () {
    match = document.getElementById("inputInvierte").value.trim();
    matchAlterado = "";

    arrayMatch = match.split("");
    arrayMatch.forEach(recorrerArray);
    function recorrerArray(item, index) {
        if (arrayMatch[index].match(/[a-z]/)) {
            matchAlterado += arrayMatch[index].replace(/\w/g, t => t.toUpperCase());
        } else {
            matchAlterado += arrayMatch[index].replace(/\w/g, t => t.toLowerCase());
        }
    }
    return this.nextElementSibling.textContent = matchAlterado;
}

let camelCase = function () {
    match = document.getElementById("inputCamelCase").value.trim();
    matchAlterado = "";

    arrayMatch = match.split("");
    arrayMatch.forEach(recorrerArray);
    function recorrerArray(item, index) {
        if (arrayMatch[index].match(/\s/)) {
            matchAlterado += arrayMatch[index + 1].replace(/\w/g, t => t.toUpperCase());
            arrayMatch.splice([index + 1], 1);
        } else {
            matchAlterado += arrayMatch[index];
        }
    }
    return this.nextElementSibling.textContent = matchAlterado;
}

let sinCamelCase = function () {
    match = document.getElementById("inputSinCamelCase").value.trim();
    matchAlterado = "";

    arrayMatch = match.split("");
    arrayMatch.forEach(recorrerArray);
    function recorrerArray(item, index) {
        if (arrayMatch[index].match(/[A-Z]/)) {
            matchAlterado += arrayMatch[index].replace(/\w/g, t => " " + t.toLowerCase());
        } else {
            matchAlterado += arrayMatch[index];
        }
    }
    return this.nextElementSibling.textContent = matchAlterado;
}

let finaliza = function () {
    match = document.getElementById("inputFinaliza").value.trim();
    match2 = document.getElementById("inputFinaliza2").value.trim();

    arrayMatch = match.split(" ");
    if (arrayMatch[arrayMatch.length - 1] == match2) {
        mensaje = "Sí";
    } else {
        mensaje = "No";
    }
    return this.nextElementSibling.textContent = mensaje;
}

let empieza = function () {
    match = document.getElementById("inputEmpieza").value.trim();
    match2 = document.getElementById("inputEmpieza2").value.trim();

    arrayMatch = match.split(" ");
    if (arrayMatch[0] == match2) {
        mensaje = "Sí";
    } else {
        mensaje = "No";
    }
    return this.nextElementSibling.textContent = mensaje;
}

let dni = function () {
    match = document.getElementById("inputDNI").value.trim();

    const re = /^(\d{8})([A-Za-z])$/;
    arrayMatch = re.exec(match);
    let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";

    if (re.test(match)) {
        if (arrayMatch[2].toUpperCase() != cadena[arrayMatch[1] % 23].toUpperCase()) {
            mensaje = "Dni incorrecto";
        } else {
            mensaje = "Dni correcto";
        }
    } else {
        mensaje = "Dni incorrecto";
    }
    console.log(arrayMatch[0]);
    console.log(arrayMatch[1]);
    console.log(arrayMatch[2]);
    return this.nextElementSibling.textContent = mensaje;
}

let matriculas = function () {
    match = document.getElementById("inputMatriculas").value.trim();

    const re = /^(\d{4})(\s|-)?([A-Za-z]){3}$/;
    // arrayMatch = re.exec(match);
    // let cadena = "BCDFGHJKLMNPRSTVWXYZ";

    if (re.test(match)) {
        // if (match.includes('Q') || match.includes('Ñ')) {
        if (match.match(/[AEIOUQÑ]/)) {
            mensaje = "Matrícula incorrecta";
        } else {
            mensaje = "Matrícula correcta";
        }
    }
    return this.nextElementSibling.textContent = mensaje;
}

window.addEventListener("DOMContentLoaded", iniciar);