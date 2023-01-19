const encrypt = text => {
    return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}

const decrypt = text => {
    return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}
const pattern = /[A-ZÁÉÍÓÚÜÑáéíóúüñ]/;

function encriptar(e) {
    e.preventDefault();

    let text = document.getElementById('textoAqui').value;
    if (pattern.test(text) == true) {
        alterta();
        sinResultado();
        return;
    }
    if (text != '') {
        text = encrypt(text);
        resultado(text);
    } else {
        sinResultado();
    }
}

function desencriptar(e) {
    e.preventDefault();

    let text = document.getElementById('textoAqui').value;
    
    if (pattern.test(text) == true) {
        alterta();
        sinResultado();
        return;
    }

    if (text != '') {
        text = decrypt(text);
        resultado(text);
    } else {
        sinResultado();
    }
}

async function copiarPortapapeles() {
    let text = document.getElementById('texto').innerHTML;
    try {
        await navigator.clipboard.writeText(text);
        
        console.log("Texto en portapapeles");
    } catch (err) {
        
        console.error("Error al copiar el texto:", err);
    }
}

function resultado(text) {
    document.getElementById('texto').innerHTML = text;
    document.getElementById('libre').classList.add('deshabilitado');
    document.getElementById('resultado').classList.remove('deshabilitado');
}

function sinResultado() {
    document.getElementById('libre').classList.remove('deshabilitado');
    document.getElementById('resultado').classList.add('deshabilitado');
}


