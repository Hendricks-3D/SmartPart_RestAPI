const http = require('http');//Importing http package
const app = require('./app');//Importing app.js

const port  = process.env.PORT  || 3000;

const server = http.createServer(app);

server.listen(port);//Start server on default port 



