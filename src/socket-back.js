import io from './servidor.js'

io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id);

    socket.on("texto_editor", (texto) => {
        //emite para todos, menos para o que está conectado/emitindo
        socket.broadcast.emit("texto_editor_clientes", texto);
        console.log(texto)
    });

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
    });
});


