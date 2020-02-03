const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.js")
client.config = config;
client.Networks = new Enmap();

//call functions file

	require("./modules/functions.js")(client)

fs.readdir("./events", (err, files) => {
	if(err) return console.error(err);

	files.forEach(file => {
		//if not a js file ignore
		if(!file.endsWith(".js")) return;
		const event = require(`./events/${file}`);
		//strip .js file ext
		let eventName = file.split(".")[0];
		client.on(eventName, event.bind(null, client));
	});
});

client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
	if(err) return console.log(err);
	files.forEach(file => {
		if(!file.endsWith(".js")) return;
		let props = require(`./commands/${file}`);
		let commandName = file.split(".")[0];
		console.log(`Attempt load of command ${commandName}`);
		client.commands.set(commandName, props);
	});
});






client.login(client.config.token)