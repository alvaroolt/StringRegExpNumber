let match

function iniciar() {
    document.getElementById("submitCapitaliza").addEventListener("click", capitaliza);
    document.getElementById("submitInvierte").addEventListener("click", invierte);
}

let capitaliza = function () {
    match = document.getElementById("inputCapitaliza").value.trim();
    return this.nextElementSibling.textContent = match.replace(/\b\w/g, t => t.toUpperCase());
}

let invierte = function () {
    match = document.getElementById("inputInvierte").value.trim();
    let matchInvertido = "";

    let arrayMatch = match.split("");
    arrayMatch.forEach(myFunction);
    console.log(this)
    function myFunction(item, index) {
        if (arrayMatch[index] == /[a-z]/){
            matchInvertido += arrayMatch[index].replace(/\w/g, t => t.toUpperCase());
        } else {
            matchInvertido += arrayMatch[index].replace(/\w/g, t => t.toLowerCase());
        }
        return this.nextElementSibling.textContent = matchInvertido;
    }
}

window.addEventListener("DOMContentLoaded", iniciar);