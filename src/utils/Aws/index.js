import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  region: process.env.REACT_APP_AWS_REGION,
});
const s3 = new AWS.S3();

export { s3 };
