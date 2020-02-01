exports.run = async (client, message, args) => {

	const botM = await message.channel.send("Checking Latency...");
	botM.edit(`Latency is ${botM.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms `)
}
exports.help = {
  name: "ping",
  description: "it pings?",
  usage: "b!ping"
};
exports.config = {
  permLevel: "user"
}