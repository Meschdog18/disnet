exports.run = (client, messsage, args) => {
	messsage.channel.send("pong!").catch(console.error);
}