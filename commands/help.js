exports.run = (client, message, args) => {
	if(!args[0]){
		let commandnames = client.commands.keyArray()
		commandnames.join(" ")
		message.channel.send("**Commands:** \n"+ commandnames + "\n For a description of each use b!help <Command>")
	}else{
		let command = args[0];
		if(client.commands.has(command)){
			command = client.commands.get(command)
		message.channel.send({embed: {
			color: 0xe8da15,
			title: command.help.name.toUpperCase(),
			description: command.help.description,
			fields: [
                 {
                  name:"Usage",
                  value: command.help.usage
                } ,
                {
                	name:"Permission Level",
                	value: command.config.permLevel
                } 
                	]
		}

		})
		}else{
		
			message.reply("That Command Does Not Exist")
		}
	
	}
}
exports.config = {
  permLevel: "user"
}
exports.help = {
  name: "help",
  description: "Gives info on a certain command",
  usage: "b!help <Command>"
};