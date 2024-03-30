const http = require("http");
const app = require("./app");
const cors = require("cors");
const server = http.createServer(app);
const {Server} = require("socket.io");
const connectionHandling = require("./socketConnection");
const io = new Server(server , {
    //Only requests originating from below origin will be accomodated by the defined methods underlying here
    cors : {                                                                 
        origin : "http://localhost:3000/",
        methods : ["Get" , "Post"],
    },
});
app.use(cors);   //enables cross origin request
const { ExpressPeerServer } = require("peer") ;          //imports the ExpressPeerServer class from the "peer" module
/*ExpressPeerServer(server, options): This function creates an instance of a PeerServer using the provided HTTP server (server). 
options: This is an optional parameter that specifies configuration options for the PeerServer. 
In this case, { debug : true } enables debug mode for the PeerServer, which will log debugging information to the console.*/
const peerServer = ExpressPeerServer(server , {
    debug : true,
});
app.use("/peerjs", peerServer);  //Attaches peerServer to the express at the URL "/peerjs"

const PORT = 8000 || process.env.PORT  ;

server.listen(PORT, () => {
    console.log("Server Is Running On Port: ", PORT);
  });