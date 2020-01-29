const mysql = require('mysql')
var NetIDs = [];
var Server = [];
var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});

con.connect(function(err){
  if (err) throw err;
  console.log("Database Connected")
});
module.exports = (client) => {
	
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
	









	client.registerUser = (user,networkid,pass,server, message) =>{
		//TODO: before register, check to make sure this server isn't already part of another network


		con.query("INSERT INTO USERS (Username,Password,NetworkID,ServerName) VALUES ('"+user+"','"+pass+"','"+networkid+"','"+server+"')", function(err, result){
			if(err) {
				console.log(err)
				message.reply("Err")
			}

		});
	}
	
}
