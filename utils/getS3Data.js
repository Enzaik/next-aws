import AWS from 'aws-sdk';
// import dataJson from '../next-s3-config.json';

export const getS3Data = async (configParam) => {
  AWS.config.update({
    accessKeyId: `${process.env.AWS_ACCESS_KEY_ID1}`,
    secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY1}`,
  });

  const s3 = new AWS.S3({
    apiVersion: '2012-10-17',
    params: {
      Bucket: 'dev-nextenhanced-config',
      Region: 'eu-west-1',
    },
  });
  const data = await s3.getObject({ Bucket: 'dev-nextenhanced-config', Key: 'next-s3-config.json' }).promise();

  return configParam ? JSON.parse(data.Body.toString('utf8'))[configParam] : JSON.parse(data.Body.toString('utf8'));
  // return dataJson[configParam];
};
