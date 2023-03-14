import http from 'http';
import server from './server'
import { ServerSocket } from './v1/sockets';

// config env
require('dotenv').config();

/** Server Handling */
const httpServer = http.createServer(server);


/** Start Socket */
new ServerSocket(httpServer);

const port = process.env.PORT || 9000;


/** Listen */
httpServer.listen(port, () => console.info(`Server is running ${port}`));

