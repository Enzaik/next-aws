require('dotenv').config();
module.exports = {
  // Target must be serverless
  target: 'serverless',
  env: {
    AWS_ACCESS_KEY_ID1: process.env.AWS_ACCESS_KEY_ID1,
    AWS_SECRET_ACCESS_KEY1: process.env.AWS_SECRET_ACCESS_KEY1,
    ALGOLIA_ID: process.env.ALGOLIA_ID,
    ALGOLIA_SECRET: process.env.ALGOLIA_SECRET,
  },
};
