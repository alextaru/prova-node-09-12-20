require('dotenv/config');
import { app } from './config/expressConfig'
const server = require('http').createServer(app);
const { PORT_HTTP } = process.env;

server.listen(PORT_HTTP, function() {
    console.log(`Servico disponivel na porta ${PORT_HTTP}`);
});