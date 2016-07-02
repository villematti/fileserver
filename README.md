# Fileserver
Fileserver skeleton build with Node.js.

Primary purpose is to have an API for video and image uploads to secure locations on Amazon S3. All traffic goes through the NodeJS server so files on Amazon S3 are protected.

# Environment variables:
At config.js, you need to add your own variables in order to get this working:

*COCONUT_API: This is your API to Coconut service at http://coconut.co/
*AWS_ACCESS_KEY: Access key for Amazon S3
*AWS_SECRET_KEY: Secret key for Amazon S3
*BUCKET: Existing bucket at Amazon S3
*AWS_REGION: What region are you using.
*PORT: The port you want you server to listen. Default is 3000.
*APP_SECRET: App secret key what will hash your user passwords for example.
*APP_DB_SERVER: Your MongoDB server url: mongodb://yourdomain:db_port/db_name.
*APP_DOMAIN: Do you have a custom domain? Add it here. Localhost is default.
*use_ssl: false - This is if you happen to have an SSL sertificate, it will convert the download links to https. 
