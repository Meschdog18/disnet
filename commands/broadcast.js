exports.run = (client, message, args) => {
var serverlist = client.guilds.array();
var server = message.guild.channels;  
var Sender = client.Networks.get(message.guild);
const input = args.join(" "); //rejoins arg array into string

for (var i = 0; i < serverlist.length; i++) {
          //get network id of message sender
          var Recipient = client.Networks.get(serverlist[i]);
          Recipient = parseInt(Recipient);


          if (Sender == Recipient) {
            console.log("send");
            try {
              var serv = serverlist[i].channels.find(
                serv => serv.name === "broadcast"
              );
             // let messageEmbed = new Discord.RichEmbed().setTitle("BROADCAST").addField("Broadcasted From ",message.guild.name).addField("Message", input).setFooter('Executed By ' + message.author.username + " At " + Date())
            console.log(serverlist[i])
              serv.send({embed: {
              title: "**__BROADCAST__**",
              /*author: {
                name: "Broadcasted From: " + message.guild.name,
                icon_url: message.guild.iconURL

              },*/
               
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
}