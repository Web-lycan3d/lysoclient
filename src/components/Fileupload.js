/** @format */

export const FileUpload = () => {
  const bucketName = "lyso-docs";
  const bucketRegion = "ap-south-1";

  window.AWS.config.update({
    region: bucketRegion,
    credentials: new window.AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-south-1:1404b757-6cb1-4038-9e29-4adefbabb411",
    }),
  });
  const s3 = new window.AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: bucketName },
  });
  return s3;
};
