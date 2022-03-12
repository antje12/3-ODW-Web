const http = require('http');
let server = http.createServer((request, response) => {
response.writeHead(200, {'Content-Type': 'text/html'});
response.write("<!DOCTYPE html>");
response.write("<html>");
response.write("<head></head>");
response.write("<body>");
response.write(" <p>Hello World!</p>");
response.write("</body>");
response.end("</html>"); //end finishes response
});
server.listen(8080);