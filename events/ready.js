module.exports = (client) => {
	console.log("Bot Online - Server Indexing Starting...");
	
var serverlist = client.guilds.array();
//index all servers
NetworkMapHandler();

function configReader(serv) {
  let netID = getNetID(serv);
  netID.then(function(result) {
    map(result, serv);
  });
}
function map(result, server) {
  client.Networks.set(server.toString(), result);
  
}
function NetworkMapHandler(resu) {
  //calls configReader which starts the promise of finding netID, once netID is found, map() maps it to the correct server
  for (var i = 0; i < serverlist.length; i++) {
    configReader(serverlist[i]);
  }
configReader}

function getNetID(currentServer) {
  var server = currentServer.channels;
  return new Promise(resolve => {
    try {
      var config = server.find(server => server.name === "config");

      config
        .fetchMessages()
        .then(messages => {
         const Network = messages.filter(msg => msg.content.startsWith("s"));
          var networkID = Network.first()
            .content.slice("setnetwork:".length )
            .split(/ +/);
          console.log(networkID);
          while (networkID == undefined);
          //wait until found NetID than resolve promise
          resolve(networkID);
        })
        .catch(err => {
          console.log(err);
        });
    } catch {
      console.log("oop");
    }
  });
}	

}