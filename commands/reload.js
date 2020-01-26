exports.run = (client, message, args) => {
if(!args || args.length < 1) return message.reply("You must provide a command name to reload.")

const commandName = args[0];

if(!client.commands.has(commandName)){
	return message.reply(`${commandName} does not exist`);
}

//delete previous command cache
delete require.cache[require.resolve(`./${commandName}.js`)];
client.commands.delete(commandName);
const props = require(`./${commandName}.js`);
client.commands.set(commandName, props);
message.reply(`${commandName} has been reloaded`)
};

exports.help = {
  name: "reload",
  description: "reloads command cache",
  usage: "b!reload <Command>"
};
exports.config = {
  permLevel: "owner"
}