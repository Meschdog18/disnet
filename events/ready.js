module.exports = async (client) => {
	console.log("Bot Online - Server Indexing Starting...");
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`Connecting ${client.guilds.array().length} Servers`);
//indexes all servers
client.getNetwork()


}