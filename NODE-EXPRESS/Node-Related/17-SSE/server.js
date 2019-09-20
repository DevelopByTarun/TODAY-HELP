const express = require("express");
const app = express();
var fs = require('fs');
app.use(express.static("public"));
app.get('/stream',function(req,res){
        res.writeHead(200, {
            'content-type' : 'text/event-stream',
            'connection' : 'keep-alive',
            'Access-Control-Allow-Origin' : '*'
        });
        fs.watchFile(__dirname+'/public/index.html', function(){
            res.write('event: fileChange\n');
            res.write('data: index.html changed at ' + new Date().toString() + '\n\n');
        });
        setInterval(function(){
            res.write('event: message\n');
            res.write('data: ' + new Date().toString() + '\n\n');
        },3000);
    });

app.listen(1234,()=>{
console.log("Server Start");
});
