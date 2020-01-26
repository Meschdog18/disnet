export.run = (client, message, args) => {
	if(!args[0]){
		client.commands.forEach(command => {
			message.reply(command.help.name);
		});
	}
}