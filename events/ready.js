const DBL = require("dblapi.js");

module.exports = async (client) => {
	const dbl = new DBL(client.config.topgg, client)
	dbl.postStats(client.guilds.size)

	console.log("Bot Online - Server Indexing Starting...");
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`Connecting ${client.guilds.array().length} Servers`);
//indexes all servers
client.getNetwork()
//updates every 30 mins
setInterval(() => {
	dbl.postStats(client.guilds.size)
  client.user.setActivity(`Connecting ${client.guilds.array().length} Servers`);

}, 1800000)

}