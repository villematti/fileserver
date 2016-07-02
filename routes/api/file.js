var config = require('../../config');
var response = require('../../responses');

var File = require('../../models/File');
var Upload = require('../../models/upload');

var fs = require('fs');
var S3FS = require('s3fs');
var s3fsImpl = new S3FS(config.s3_bucket, {
	region: config.aws_region,
	accessKeyId: config.aws_access_key,
	secretAccessKey: config.aws_secret_key
});

var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

module.exports = function(app) {
	app.use(multipartyMiddleware)

	app.post('/api/upload/image', function(req, res) {

		// Test user
		var user = { _id:'577786ec313d35740edf4a5c' }

		if(req.files.image) {
			var image = req.files.image;
			var filePath = image.path;
			var size = image.size;
			var type = image.type;
			var filename = image.originalFilename;

			var newUpload = new Upload();
			newUpload.save();

			var newFile = new File({
				originalName: filename,
				fileType: 'image',
				mimeType: type,
				size: size,
				uploadId: newUpload._id,
				userId: user._id
			});

			newFile.save(function(error) {
				if(error) {
					return error;
				}
			});

			var stream = fs.createReadStream(filePath);

			var writable = s3fsImpl.createWriteStream(newUpload._id.toString())

			stream.pipe(writable);

			writable.on('finish', function() {
				res.send(response.imageUploadOk(newFile._id));
			})
		};
	});

	app.post('/api/upload/video', function(req, res) {

		var user = { _id:'577786ec313d35740edf4a5c' }
			console.log(req.files);
			if(req.files.image) {

				var video = req.files.image;
				var filePath = video.path;
				var size = video.size;
				var type = video.type;
				var filename = video.originalFilename;

				var newUpload = new Upload();
				newUpload.save();

				var newFile = new File({
					originalName: filename,
					fileType: 'video',
					mimeType: type,
					size: size,
					uploadId: newUpload._id,
					userId: user._id
				});

				newFile.save(function(error) {
					if(error) return error;
				});

				var stream = fs.createReadStream(filePath);

				var writable = s3fsImpl.createWriteStream(newUpload._id.toString())

				stream.pipe(writable);

				writable.on('finish', function() {
					res.send(response.imageUploadOk(newFile._id));
				});
			}
		});

	app.get('/:id', function(req, res) {
			File.findOne({_id: req.params.id})
				.populate('uploadId')
				.populate('userId')
				.exec(function(err, file) {
					if(err) return err;

					if(file) {
						var mimetype = file.mimeType;

						res.writeHead('200', {'Content-Type': mimetype});

						var filestream = s3fsImpl.createReadStream(file.uploadId._id.toString())
							.pipe(res);
					}
				})
		});
};