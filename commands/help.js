exports.run = async (client, message, args) => {
    let commandnames = client.commands.keyArray()
    
    for(var i=0;i<commandnames.length;i++){
                let command = client.commands.get(commandnames[i])
            if(command.config.permLevel == "owner"){
                commandnames.splice(i,1)
            }
            }
    if(args[0] == "-list"){
         cmds = commandnames.join(",")
        message.channel.send("**Commands:** \n"+ cmds + "\n For a description of each use b!help <Command>")
        return
    }
    if (!args[0]) {
       const mes = await message.channel.send("loading...")
            await mes.react("⬅️")
            await mes.react("➡️")
        
       client.reactionCollector(mes, message.author.id)
      
    } 
    

    else {
        let command = args[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command)
            message.channel.send({
                embed: {
                    color: 0xe8da15,
                    title: command.help.name.toUpperCase(),
                    description: command.help.description,
                    fields: [{
                        name: "Usage",
                        value: command.help.usage
                    }, {
                        name: "Permission Level",
                        value: command.config.permLevel
                    }]
                }

            })
        } else {

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