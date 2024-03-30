const connectionHandling = (io) => {
    io.on("connection" , (socket) => {
    console.log(`User connected to meet with id ${socket.id}`);
    socket.on("join-room" , (roomId , userId) => {
        socket.join(roomId) ;
        socket.to(roomId).broadcast.emit("User joined" , userId);      //Connecting User
        console.log(`${userId} joined meet with ${roomId}`) ;
        socket.on("send-message" , (msg , user , time) => {
            io.to(roomId).emit("receive-message", msg , user , time);         //Sending message on the meet
        });
        socket.on("disconnect" , () => {
            socket.to(roomId).broadcast.emit("User Disconnected" , userId) ;     //User disconnected
        });
    });
});
}
module.exports = connectionHandling;