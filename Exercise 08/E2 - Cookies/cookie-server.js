const http = require('http');

let server = http.createServer((req, res) => {

    console.log("Request url:", req.url);
    console.log("Request cookies:", req.headers.cookie);

    let cookieHeader = req.headers.cookie;
    let response = "World"

    if (cookieHeader == undefined) {
        console.log("First visit - Setting cookie");
        res.writeHead(200, {
            'Content-Type': 'text/html',
            //'Access-Control-Allow-Origin': '*',
            'Set-Cookie': 'MyCookie=abc123'
        });
    }
    else {
        console.log("Second visit - Cookie already set");
        res.writeHead(200, {
            'Content-Type': 'text/html',
            //'Access-Control-Allow-Origin': '*'
        });
        response = "Again";
    }

    let html = `<html>
               <head>
                 <script>
                   console.log(document.cookie);
                 </script>
               </head>
               <body>
                 <p>Hello ${response}!</p>
               </body>
              </html>`;

    res.end(html);
});
server.listen(8080); 
