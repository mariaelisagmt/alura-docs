import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io"

const app = express()
const port = process.env.port || 3000;

//Configurando para o servidor utilizar de forma estatica os arquivos de public
const atualPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(atualPath, "../..", "public");
app.use(express.static(publicDirectory));

const serverHttp = http.createServer(app);

serverHttp.listen(port, () => 
    console.log(`Servidor escutando na porta ${port}`)
);

const io = new Server(serverHttp);

export default io;