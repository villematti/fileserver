var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('File', new Schema({
	originalName: {
		type: String,
		required: true
	},
	// Practically image or video
	fileType: {
		type: String,
		required: true
	},
	mimeType: {
		type: String,
		required: true
	},
	size: {
		type: Number,
		required: true
	},
	uploadId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Upload',
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
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