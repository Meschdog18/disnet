module.exports = (client, message) => {
	if(!message.content.startsWith(client.config.prefix) || message.author.bot) return;



	const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase()

	const cmd = client.commands.get(command);

	if(!cmd) return //returns if command doesn't exist
	
	//NEED TO ADD PROPER USER LEVEL SYSTEM

	//if user calling command doesn't have bot owner level permission cancel command 
	if(cmd.config.permLevel == "owner" && message.author.id != client.config.ownerID) return;
	let requiredPerm = cmd.config.permLevel

	//if user isn't admin when needed cancel command
	if(requiredPerm == "admin" && !(message.member.hasPermission("ADMINISTRATOR"))) return;



	cmd.run(client, message, args);
}