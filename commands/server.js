
const os = require('os');

exports.run = (client, message, args) => {
message.channel.send(os.cpus())
}
exports.help = {
name: "server info",
usage: "b!server"
}
exports.config = {
	permLevel: "owner"
}