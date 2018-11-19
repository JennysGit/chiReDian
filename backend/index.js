var express = require('express');
var app = express();
var http = require('http');
var wxConfigData = require('./wx/wx');
var port = '3001';

var conpression = require('compression');
app.use(conpression());

app.use(express.static('./dist'));
app.set('port', port);

var server = http.createServer(app);
server.listen(port);

app.get('/wx/configData', (req, res)=>{
	let href = req.query.href;
	wxConfigData(href)
	.then((data)=>{
		res.send(JSON.stringify(data));
	})
});

server.on("listening", onListening);

function onListening() {
  console.log(`server port ${port} listening and open browser with http://localhost:${port}....`);
  //opn(`http://localhost:${port}`,"chrome");
}