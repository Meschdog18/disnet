exports.run = (client, messsage, args) => {
	messsage.channel.send("no").catch(console.error);
}