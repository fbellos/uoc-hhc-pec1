function filtrar() {

    let isCheckedMonumentos = document.getElementById("monumentos").checked;
    let isCheckedMuseos = document.getElementById("museos").checked;
    let isCheckedIglesias = document.getElementById("iglesias").checked;

    let seccionMonumentos = document.getElementsByClassName("monumentos")[0];
    if(!isCheckedMonumentos) {
        seccionMonumentos.classList.add("d-none");
    } else {
        if (seccionMonumentos.classList.contains("d-none")) {
            seccionMonumentos.classList.remove("d-none");
        }
    }

    let seccionMuseos = document.getElementsByClassName("museos")[0];
    if(!isCheckedMuseos) {
        seccionMuseos.classList.add("d-none");
    } else {
        if (seccionMuseos.classList.contains("d-none")) {
            seccionMuseos.classList.remove("d-none");
        }
    }

    let seccionIglesias = document.getElementsByClassName("iglesias")[0];
    if(!isCheckedIglesias) {
        seccionIglesias.classList.add("d-none");
    } else {
        if (seccionIglesias.classList.contains("d-none")) {
            seccionIglesias.classList.remove("d-none");
        }
    }
}

