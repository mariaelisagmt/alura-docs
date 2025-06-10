import { emitTextoEditor } from "./socket-front-documento.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
 emitTextoEditor(textoEditor.value)
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

export {atualizaTextoEditor};