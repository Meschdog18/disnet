exports.run = (client, message, args) => {
  if (client.Networks.get(message.guild) == undefined) {
          console.log("Not On Network");
          var success = true
         
          try{
           let netID = getNetID(message.guild);
          netID.then(function(result) {
           map(result, message.guild);
          });
         }catch{
           success = false
         }
         if(success){
           message.reply("You have connected to the Network!");
         }
          
        } else {
          console.log("on network");
          message.reply("You're already connected to a Network")
        }
}
exports.help = {
  name: "network",
  description: "adds your server to the corresponding network of the networkID you have entered in #config",
  usage: "b!network"
};
exports.config = {
  permLevel: "admin"
}