Comandos:
npm init -y
npm install express@4
npm run dev
npm installl nodemon@2 -D
npm install socket.io@4

Rodando:
npm run dev

Recursos Utilizados:
JS
Express
Socket.io  -  https://socket.io/docs/v4/#features



Contexto
Protocolo websocket criado em 2011
Vantagens:
  -long-polling do http usado como reserva, caso o navegador não tenha suporte
  - reconexão automática caso o cliente não consiga se conectar diretamente ao servidor
  - buffer de pacotes quando o cliente é desconectado por um motivo os seus dados são armazenados, para quando a conexão for reestabelecida, eles sejam enviados automáticamente.
