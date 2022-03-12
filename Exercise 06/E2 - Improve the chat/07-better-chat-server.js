const {Server} = require('ws');

function getTime()
{
    return new Date(Date.now()).toLocaleString();
}

let wsserver = new Server({ port: 8080, path: '/' });
let latest = //TODO: figure out whether userid needs handling here
    { user: "server", time: getTime(), message: "no messages yet" };

 wsserver.on('connection', ws => {
    console.log("New client connected");
    ws.send(JSON.stringify(latest)+"\n");
    ws.on('close', (code, message) => console.log("Connection closing", code, message));
    ws.on('message', msg => {
        //TODO: figure out whether userid needs handling here
        console.log("Message arrived", msg);
        let json = JSON.parse(msg);
        let user = json.user;
        let message = json.message;

        console.log("User ", user);
        console.log("Message ", message);

        latest = { user: user, time: getTime(), message: message };
        wsserver.clients.forEach(c => c.send(JSON.stringify(latest)));
    });
});
