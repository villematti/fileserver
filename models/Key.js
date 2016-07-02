var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Key', new Schema({
	valid: {
		type: Boolean,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	modifiedAt: {
		type: Date,
		default: Date.now
	}
}));