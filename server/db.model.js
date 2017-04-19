const mongoose = require('mongoose');

const User = new mongoose.Schema({
	name: { type: String, required: true},
	number: { type: Number, require: true},
	address: { type: String, require: true}
});

module.exports = mongoose.model('user', User);
