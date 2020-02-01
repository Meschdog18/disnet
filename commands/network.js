exports.run = (client, message, args) => {
  var ServerCount = 0;
 var Sender = client.Networks.get(message.guild);
 var serverlist = client.guilds.array();


        for (var i = 0; i < serverlist.length; i++) {
            var Recipient = client.Networks.get(serverlist[i]);
            Recipient = parseInt(Recipient);
            if(Sender == Recipient){
              ServerCount++
            } 
         }
        message.channel.send({embed: {
      title: "NETWORK",
      fields: [
                {
                 name:"Network ID",
                 value: Sender.toString()
                },
                {
                name:"Server Count",
                value: ServerCount
                } 
                  ]
    }

    })
}
exports.help = {
 name: "network",
  description: "returns network info (Network id & # of Servers on Network)",
  usage: "b!network"
}
exports.config = {
  permLevel: "admin"
}