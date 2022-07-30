//Create HTTP server
const http = require("http");

//Take server and inject into library to allow you to do
//websocket handshake

//Create websocket
const WebSocketServer = require("websocket").server

let connection = null;

const httpserver = http.createServer((req,res) => {
    console.log("we have received a request");
})

const websocket = WebSocketServer({
    "httpServer": httpserver
})

websocket.on("request", request => {

    connection = request.accept(null,request.origin)
    connection.on("onopen", () => console.log("Opened!"))
    connection.on("onclose", () => console.log("Closed!"))
    connection.on("onmessage", message => {
        console.log(`You've recieved a message ${message}`)
    })

})

httpserver.listen(8080, () => console.log("My server is listening on port 8080"))