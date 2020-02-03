var codeToRun;
exports.run = (client, message, args) => {
	 codeToRun = args.join(" ");
	try{
		
	let evaled = eval(codeToRun);

	if(typeof evaled !== "string"){
		evaled = require("util").inspect(evaled)
	}

	 messageEmbed("OUTPUT", evaled, message)
} catch (err) {
  messageEmbed("ERROR", err, message)
}
	
}
const messageEmbed = (name, output, message) =>
{
	 message.channel.send({embed:{

		fields: [{
                                name: `**INPUT**`,
                                value: format(codeToRun)
                            }, {

                                name: `**${name}**`,
                                value: format(output)
                            }

                        ],
	}})
}
const format = text => {
	return (`\`\`\`js\n${clean(text)}\n\`\`\``)
}
const clean = text => {
	if(typeof(text) === "string")
		return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;

}
exports.help = {
  name: "eval",
  description: "runs input code",
  usage: "b!eval <code>"
};
exports.config = {
  permLevel: "owner"
}