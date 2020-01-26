# Disnet
       
Disnet is a discord bot that allows you to connect multiple discord servers into a network. Disnet allows you to broadcast messages to all the discord servers in your network. So if you have multiple servers and want a way to link them together, than disnet is a viable solution.

 

## Commands
- b!broadcast - sends a message to all servers on the network
- b!network - adds your server to the corresponding network of the networkID you have entered in #config
- b!help - lists all of the bot's commands
- b!info - lists bot's info
- b!network-stats - returns network info (Network id & # of Servers on Network)
 

## Setup
For setup you can run b!setup which will create 3 channels - #broadcast where you use b!broadcast <message> to send messages to other servers on your network, and #config where you have to enter setnetwork:<number> (type any number, just make sure any other server you want on your network has the same number) i also recommend making #config private from users so they can't change your network id(Also make sure to keep your networkID a secret or else anyone can broadcast to your server's broadcast channel. It also creates #network-userchat, where users can send messages to users on other servers on the same network(No commands are necessary to send messages just type freely in this channel) - essentially just a broadcast but on a userlevel, where as a broadcast is more meant as a network wide announcement

 

## Planned Ideas
- Poll system - Admins can host network wide polls 
- Network wide moderation tools
- Add proper network creation process - as in being able to own a network with a login and with a randomly generated id (Currently you just choose an id and make sure your other servers have the same id)
## Side Notes
This bot is in really early alpha so its pretty barebones currently, but i plan on adding more features and increasing stability and such.
If you have any ideas for features or bugs you've found than please join our support discord server and send a message on it
