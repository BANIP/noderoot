
    var express = require("express");
    var path = require("path");
    var app = express();
    const server = require("http").createServer(app);

    const appList = [
        {name: "uncytick", foldername: "uncyTick"},
    ]
    
    appList.forEach(({name, foldername}) => {
        const serverPath = path.resolve("../",foldername,"server");
        app.use(`/${name}`, require(serverPath) );
    });
    
    
    
    server.listen(8000,(req,res) => {
        console.log("Express server has started on port 8000");
    });
    
