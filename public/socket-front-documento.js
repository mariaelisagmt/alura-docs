import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitTextoEditor(texto) {
    socket.emit("texto_editor", texto);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
})

export { emitTextoEditor };