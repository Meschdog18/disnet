//const Discord = require("discord.js");

exports.run = (client, message, args) => {
var serverlist = client.guilds.array();
console.log(client.Networks)

var server = message.guild.channels;  
var Sender = client.Networks.get(message.guild.name);
const input = args.join(" "); //rejoins arg array into string
for (var i = 0; i < serverlist.length; i++) {
          //get network id of message sender
          var Recipient = client.Networks.get(serverlist[i].name);
          Recipient = parseInt(Recipient);



          if (Sender == Recipient) {
            try {
              var serv = serverlist[i].channels.find(
                serv => serv.name === "broadcast"
              );
              serv.send({embed: {
             
             /* author: { works but is disabled, because not sure if i like the look
                name: "Disnet", 
                icon_url: client.user.defaultAvatarURL
              },*/
              color: 0xeb3434, 
              title: "**__BROADCAST__**",
               
                thumbnail: {
                  url: message.guild.iconURL
                },
                fields: [
                 {
                  name:"Broadcasted From ",
                  value: message.guild.name
                }    ,
                  {
                  
                  name:"Message",
                  value: input
                }   
                  
              ],
              timestamp: new Date(),
              footer: {
               icon_url: message.author.avatarURL,
                text: "Executed By " + message.author.username
                
              }
            }
            })
            } catch(error) {
              console.log(error);
              message.reply(
                "You must create a #broadcast channel to recieve messages!"
              );
              break;
            }
          }
        }
};
exports.help = {
  name: "broadcast",
  description: "Broadcasts message to all servers on your network",
  usage: "b!broadcast <Message>"
};
exports.config = {
  permLevel: "admin"
}