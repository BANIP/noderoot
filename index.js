
    var express = require("express");
    var path = require("path");
    var app = express();
    
    const appList = [
        {name: "dcextract", foldername: "dc-extraction"},
        {name: "sketch", foldername: "project-sketch"},
    ]
    
    appList.forEach(({name, foldername}) => {
        const serverPath = path.resolve("../",foldername,"server");
        app.use(`/${name}`, require(serverPath) );
    });
    
    
    
    app.listen(8080,(req,res) => {
        console.log("Express server has started on port 8080");
    });
    
