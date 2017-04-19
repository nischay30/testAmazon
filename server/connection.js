const mongoose = require('mongoose');
const mongoHost = process.env.MONGO_URL || 'mongodb://localhost/phone';

mongoose.connect(mongoHost, (err, res) => {
	if(err) { console.log('Mongo Err:', err); return; }
	console.log('Mongo is connected');
});

