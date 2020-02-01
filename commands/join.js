exports.run = (client, message, args) => {

	if(args[0] && args [1] != ""){
	client.joinNetwork(args[0], args[1], message.guild.name, message)
	}else{
		message.reply("You must prove a NetID & Password!")
	}
}
exports.help = {
  name: "join",
  description: "leaves networks",
  usage: "b!join <NetID> <Password>"
};
exports.config = {
  permLevel: "admin"
}