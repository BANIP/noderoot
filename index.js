
    var express = require("express");
    var path = require("path");
    var app = express();
    var server = require("http").createServer(app)

    const appList = [
        {name: "dc", foldername: "dc-extraction"},
        {name: "sketch", foldername: "open-sketch"},
	{name: "uncytick", foldername: "uncytick"},
    ]
    
    appList.forEach(({name, foldername}) => {
        const serverPath = path.resolve("../",foldername,"server");
        app.use(`/${name}`, require(serverPath) );
    });

    
    
    app.listen(8080,(req,res) => {
        console.log("Express server has started on port 8000");
    });
    

