const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const api = require('./api');
const app = express();

app.use(bodyParser.join());
app.use(bodyParser.urlencoded({extended: false}));

app.use(api);

app.use(express.static(path.resolve(__dirname, './static')));

app.get('*', (res, res) =>{
	const html = fs.readFileSync(path.resolve(__dirname, './static/index.html'),  'utf-8');
	res.send(html);
});

app.listen(8088);