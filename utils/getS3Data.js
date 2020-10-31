import AWS from 'aws-sdk';
export const getS3Data = async (configParam) => {
  console.log(process.env);

  AWS.config.update({
    accessKeyId: `${process.env.AWS_ACCESS_KEY_ID1}`,
    secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY1}`,
  });

  const s3 = new AWS.S3({
    apiVersion: '2012-10-17',
    params: {
      Bucket: 'dev-nextenzaik-config',
      Region: 'eu-west-1',
    },
  });
  // const data = await s3.getObject({ Bucket: 'dev-nextenzaik-config', Key: 'next-s3-config.json' }).promise();
  const data = {
    menurow: [
      { text: 'View Menu', type: 'link' },
      { text: 'Settings', type: 'link' },
      { text: 'Notifications', type: 'link' },
      { type: 'divider' },
      { text: 'Get Desktop app', type: 'link' },
      { text: 'Notifications', type: 'link' },
    ],
    selector: [
      { text: 'View Selector', type: 'link' },
      { text: 'Settings', type: 'link' },
      { text: 'Notifications', type: 'link' },
      { type: 'divider' },
      { text: 'Get Desktop app', type: 'link' },
      { text: 'Notifications', type: 'link' },
    ],
    item: [
      { text: 'View Item', type: 'link' },
      { text: 'Settings', type: 'link' },
      { text: 'Notifications', type: 'link' },
      { type: 'divider' },
      { text: 'Get Desktop app', type: 'link' },
      { text: 'Notifications', type: 'link' },
    ],
    projects: [
      {
        id: 'graphql',
        text: 'GraphQL API',
        helpText: 'in Engineering',
        date: 'March 17, 2020',
        color: 'bg-pink-600',
      },
      {
        id: 'ios',
        text: 'iOS Apps',
        helpText: 'in Development',
        date: 'March 20, 2020',
        color: 'bg-purple-600',
      },
      {
        id: 'marketing',
        text: 'Marketing',
        helpText: 'in Marketing',
        date: 'February 20, 2020',
        color: 'bg-green-400',
      },
    ],
  };

  // return JSON.parse(data.Body.toString('utf8'))[configParam];
  return data[configParam];
};
