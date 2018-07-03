
    var express = require("express");
    var path = require("path");
    var fs = require("fs");
    var app = express();

    const options = {
        key: fs.readFileSync("/etc/letsencrypt/live/byongshine.tk/privkey.pem"),
        cert: fs.readFileSync("/etc/letsencrypt/live/byongshine.tk/fullchain.pem")
    };

   const server = require("https").createServer(options,app);
  // server.http = require("http").createServer(app);
   const appList = [
        {name: "uncytick", foldername: "uncytick"},
    ]
    
    appList.forEach(({name, foldername}) => {
        const serverPath = path.resolve("../",foldername,"server");
        app.use(`/${name}`, require(serverPath)(server) );
    });

   // server.listen(80,() => console.log("http server start"));
    server.listen(443,() => console.log("https server start"))
