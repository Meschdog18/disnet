# Disnet
       
Disnet is a discord bot that allows you to connect multiple discord servers into a network. Disnet allows you to broadcast messages to all the discord servers in your network. So if you have multiple servers and want a way to link them together, than disnet is a viable solution.

 

## Commands
- b!broadcast - sends a message to all servers on the network
- b!help - lists all of the bot's commands
- b!info - lists bot's info
- b!network-stats - returns network info (Network id & # of Servers on Network)
- b!register <NetworkID> <Password> - creates a new Network with the provided NetworkID & Password
- b!join <NetworkID> <Password> - joins Network with Provided NetworkID & Password 
- b!leave - leaves the network your in.
       
       
## Setup
For setup you can run b!setup which will create 2 channels - #broadcast where you use b!broadcast <message> to send messages to other servers on your network. It also creates #network-userchat, where users can send messages to users on other servers on the same network(No commands are necessary to send messages just type freely in this channel) - essentially just a broadcast but on a userlevel, where as a broadcast is more meant as a network wide announcement.

Now for connecting to the Network you can do 1 of 2 things, you can run b!register <Netid> <Pass> and create you own Network, or you can join another Network with b!join <Netid> <Pass> . Just make sure when running b!register, that you give servers trying to join, the same netID & password that you registered your network with. 


## Important Detail
Only give your password to servers that you want to join, otherwise anyone can join and broadcast to your server.


## Planned Ideas
- Poll system - Admins can host network wide polls 
- Network wide moderation tools

## Side Notes
This bot is in really early alpha so its pretty barebones currently, but i plan on adding more features and increasing stability and such.
If you have any ideas for features or bugs you've found than please join our support discord server and send a message on it
