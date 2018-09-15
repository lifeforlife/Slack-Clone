import { messageController } from "../controllers";

export default io => {
  io.on("connection", socket => {
    console.log("socket io connected");
    socket.on("sendChannelMessage", async data => {
      const response = await messageController.createMessage(data);
      io.emit("receiveChannelMessage", response);
    });
  });
};