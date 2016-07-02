var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: Buffer,
		required: true
	},
	profileId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Profile',
		required: true
	},
	apiKey: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Key',
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