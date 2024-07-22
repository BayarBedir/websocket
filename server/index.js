var server= require("ws").Server;
var s= new server({port:5001});

s.on("connection",function(ws){
    
    ws.on("message", function(message){
        var msg=JSON.parse(message);

        if(msg.type == "name") ws.personName=msg.data;
        else{
        s.clients.forEach(function e(client){
            if(client!=ws)client.send(JSON.stringify({
                name:ws.personName,
                data:msg.data
            }));
        })
        }
      
    })
})