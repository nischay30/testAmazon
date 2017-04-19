const express = require('express');
const app = express();
const path = require('path');
const schema = require('./db.model.js');
const expressPort = process.env.EXPRESS_PORT || 8090;
require('./connection.js');

app.use(require('body-parser').json());
app.use(express.static(path.join(__dirname,'..', 'build')));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, content-type, Accept");
	next();
});

app.listen(expressPort, (err) => {
	if(err) { console.log(err); return; }
	console.log('Server started on', expressPort);
});


app.post('/save', (req, res) => {
	const user = new schema(req.body.data);
	user.save((err, res) => {
		if(err) { console.log('Err in saving', err); return; }
		console.log(res);
	});
	res.send('done');
});

app.get('/phonebook', (req, res) => {
	schema.find({}, (err, doc) => {
		if(err) { console.log('Err', err); return; }
		res.json(doc);
	});
});