exports.run = (client, message, args) => {
	if(!args[0]){
		let commandnames = client.commands.keyArray()
		commandnames.join(" ")
		message.channel.send("**Commands:** \n"+ commandnames + "\n For a description of each use b!help <Command>")
	}else{
		let command = args[0];
		command = client.commands.get(command)
		message.channel.send({embed: {
			title: command.help.name,
			description: command.help.description,
			fields: [
                 {
                  name:"Usage",
                  value: command.help.usage
                }  
                	]
		}

		})

	}
}