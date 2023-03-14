import server from './server';
import initAllSocket from './v1/sockets';
import Global from './v1/config/Global'

const http = require('http').Server(server)
const io = require('socket.io')(http, {
    cors:{
        origin: '*'
    }
});
require('dotenv').config();

const port = process.env.PORT || 9000;

Global.getInstance(io, [''])


// use middleware
// global._io.use((socket, next) => {
    
// })

Global.instance.getIo.on('connection', initAllSocket)

http.listen( port, () => {
    console.log(`WSV start with port ${port}`);
})
