exports.run = (client, message, args) =>{
  //if channel dosen't exist, than create server
          var server = message.guild.channels;
        //todo make so only admin/mods can type in broadcast - https://discordjs.guide/popular-topics/permissions.html#terminology
        if (!server.find(server => server.name === "broadcast")) {
          message.guild.createChannel("broadcast", { type: "text" });
        } else {
          message.reply("#broadcast already exists!");
        }
        if (!server.find(server => server.name === "config")) {
          message.guild.createChannel("config", { type: "text" });
         /* not implemented yet
          message.reply("Would you like me to generate a networkID?(y/n)")
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000})
          collector.on('collect', message => {
            if(message.content == "y"){
            }
          })*/
        } else {
          message.reply("#config already exists!");
        }
        if(!server.find(server => server.name === "network-userchat")){
          message.guild.createChannel("network-userchat", {type: "text"});
        }else{
          message.reply("#network-userchat already exists!");
        }
}
exports.help = {
  name: "setup",
  description: "adds channels - #broadcast, #config, #network-userchat",
  usage: "b!setup"
}
exports.config = {
  permLevel: "admin"
}