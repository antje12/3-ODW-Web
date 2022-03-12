// npm install express
const express = require('express');
const server = express();

server.get('/', (req, res) => res.send('Status 200 = You did it!'));

server.put('/', (req, res) => { res.sendStatus(405) });
server.post('/', (req, res) => { res.sendStatus(405) });
server.delete('/', (req, res) => { res.sendStatus(405) });

server.get('/path/resource', (req, res) => { res.sendStatus(404) });

// general fallback
server.get('*', (req, res) => { res.sendStatus(404) });

server.listen(8080);
