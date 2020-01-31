exports.run = (client, message, args) => {

	client.leaveNetwork(message.guild.name, message);
	
}
exports.help = {
  name: "leave",
  description: "leaves networks",
  usage: "b!leave"
};
exports.config = {
  permLevel: "admin"
}