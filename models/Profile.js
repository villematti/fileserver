var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Profile', new Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	uploadLimit: {
		type: Number
	},
	downloadLimit: {
		type: Number
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