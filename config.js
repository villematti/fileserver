module.exports = {
	coconut_api_key: process.env.COCONUT_API || 'Your Coconut api key',
	s3_bucket: process.env.S3_BUCKET || 'Your Amazon S3 Bucket name',
	aws_access_key: process.env.AWS_ACCESS_KEY || 'Your Amazon S3 Access Key',
	aws_secret_key: process.env.AWS_SECRET_KEY || 'Your Amazon S3 Secret Key',
	aws_region: process.env.AWS_REGION || 'whatisyourregion',
	port: process.env.PORT || '3000',
	secret: process.env.APP_SECRET || 'putsomethingsecrethere',
	db_server: process.env.APP_DB_SERVER || 'this should be your MongoDB url',
	app_domain: process.env.APP_DOMAIN || 'localhost',
	use_ssl: false 
}