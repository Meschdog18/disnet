const DBL = require("dblapi.js");

module.exports = async (client) => {
	const dbl = new DBL(client.config.topgg, client)

	console.log("Bot Online - Server Indexing Starting...");
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`Connecting ${client.guilds.array().length} Servers`);
//indexes all servers
client.getNetwork()
//updates every 30 mins
setInterval(() => {
dbl.postStats(client.guilds.size)
}, 1800000)

}