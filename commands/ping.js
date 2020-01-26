exports.run = (client, messsage, args) => {
	messsage.channel.send("pong!").catch(console.error);
}
exports.help = {
  name: "ping",
  description: "it pings?",
  usage: "b!ping"
};
exports.config = {
  permLevel: "user"
}