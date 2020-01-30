const mysql = require('mysql')
var NetIDs = [];
var Server = [];

module.exports = (client) => {
	var conf = client.config
var con = mysql.createConnection({
  host: conf.hostname,
  user: conf.username,
  password: conf.password,
  database: conf.database
});

con.connect(function(err){
  if (err) throw err;
  console.log("Database Connected")
});
con.on('error', function(err) {
	if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
		mysql.createConnection(con)
    } else {                                      
      throw err;                      
    }
})


	//These Funcs are all network indexing related
	client.getNetwork = () => {
		getNetIDs().then(id => {
			getServers().then(name=> {
				for(var i=0;i<name.length;i++){
					//var servname = client.guilds.find(guild => guild.name === name[i].toString())
					//console.log(servname)
					map(id[i], name[i].toString())
				}
			})
		});	 
		
	}
	 map = (id, server) => {
  		console.log(id + " " + server)
  		client.Networks.set(server, id);

	}
	getServers = () => {
		  return new Promise(resolve => {

		  con.query("SELECT ServerName FROM USERS", function(err, result){
			if(err) {
				console.log(err)
			}else{
				for(var i=0;i<result.length;i++){
				 Server.push(result[i].ServerName)
				}
				resolve(Server)
			}
			});


	});

		
	}
	getNetIDs = () => {
		  return new Promise(resolve => {

		  con.query("SELECT NetworkID FROM USERS", function(err, result){
			if(err) {
				console.log(err)
			}else{
				for(var i=0;i<result.length;i++){
				 NetIDs.push(result[i].NetworkID)
				}
				resolve(NetIDs)
			}
			});


	});
	}
	//
	






	client.leaveNetwork = (server, message) => {

		if(!client.Networks.has(server)){
			message.reply("Your not in a Network")
			return;
		}

		con.query("DELETE FROM USERS WHERE ServerName = " + mysql.escape(server) ,function(err, result){
			if(err){
				message.reply("Err Occurred ")
			}else{
				client.Networks.delete(server)
				message.reply("You have left the Network");
			}
		});
	}
	client.joinNetwork = (netid, pass, server, message) => {
		if(client.Networks.has(server)){
			//rather than using a mysql query, just checks network map
			message.reply("Your server is already part of a network");
			return;
		}
		con.query("SELECT * FROM USERS WHERE NetworkID = " + mysql.escape(netid) + "AND Password = "+ mysql.escape(pass), function(err, result){
			if(err) {
				console.log(err)
				message.reply("Err, make sure you enter both <networkid> & <pass>")
			}else{
				try{
					if(result[0].NetworkID == netid && result[0].Password == pass){
					//adds server to database, but excludes username, because username is only added when a network is created so that owner has special permissiomn over the network
					//for checking if server of network is owner, just check to see if username column is null (if null that its not the owner)
					con.query("INSERT INTO USERS (Password,NetworkID,ServerName) VALUES ("+ mysql.escape(pass)+","+mysql.escape(netid)+","+mysql.escape(server)+")", function(err, result){
					if(err) {
					console.log(err)
					message.reply("Err, make sure you enter both <networkid> & <pass>")
					}else{
					message.reply("You are now apart of the network - " + netid + "!");
					//adds server to network
					map(netid, server);
					}

					});
					
					}
				
				}catch{
					message.reply("Invalid Credentials")

				}
			}
		});
	}

	client.registerNetwork = (user,networkid,pass,server, message) =>{
		//todo salting hashes for more secure data storage to prevent dictonary attacks 
		//add a network leave option

		//check to make sure this server isn't already part of another network
		if(client.Networks.has(server)){
			//rather than using a mysql query, just checks network map
			message.reply("Your server is already part of a network");
			return;
		}

		con.query("INSERT INTO USERS (Username,Password,NetworkID,ServerName) VALUES ("+mysql.escape(user)+","+mysql.escape(pass)+","+mysql.escape(networkid)+","+mysql.escape(server)+")", function(err, result){
			if(err) {
				console.log(err)
				message.reply("Err, make sure you enter both <networkid> & <pass>")
			}else{
				message.reply("You have created network - "+ networkid + "!");
				//adds network creater to their created network
				map(networkid, server);
			}

		});
	}
	
}