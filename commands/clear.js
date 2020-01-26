exports.run = (client, message, args) => {
  if (message.channel.type == "text") {
          message.channel
            .fetchMessages()
            .then(messages => {
              const botMessages = messages.filter(msg => msg.author.bot);
              const commands = messages.filter(msg =>
                msg.content.startsWith(client.prefix)
              );
              message.channel.bulkDelete(botMessages);
              message.channel.bulkDelete(commands);
            })
            .catch(err => {
              console.log("Error while doing Bulk Delete");
              console.log(err);
            });
        }
}
exports.help = {
  name: "clear",
  description: "Bulk deletes botmessages & commands in channel it was called",
  usage: "b!clear"
}