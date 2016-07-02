var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Upload', new Schema({
	createdAt: {
		type: Date,
		default: Date.now
	},
	modifiedAt: {
		type: Date,
		default: Date.now
	}
}));