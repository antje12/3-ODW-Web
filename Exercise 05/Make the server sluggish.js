const {createServer} = require('http');

let server = createServer((request, response) => {
    console.log("Wait!");
    let p = new Promise(r => setTimeout(r, 5000));
    p.then(_ => {
        console.log("Time is up!");
    }).then(_ => {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World!');
    });    
});
server.listen(8080);
