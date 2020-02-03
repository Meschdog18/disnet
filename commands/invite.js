exports.run = (client, message, args) => {
message.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=668515187636043776&permissions=8&scope=bot')
}
exports.config = {
    permLevel: "user"
}
exports.help = {
    name: "invite",
    description: "Give's bot invite link",
    usage: "b!invite"
};