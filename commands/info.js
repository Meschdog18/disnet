exports.run = (client, message, args) => {
message.channel.send({embed: {
title:"INFO",
description: "Disnet is a bot that allows for continuity among servers by creating comprehensive networks"
}})

}
exports.help = {
name: "info",
description: "basic bot info",
usage: "b!info"
}
exports.config = {
	permLevel: "user"
}