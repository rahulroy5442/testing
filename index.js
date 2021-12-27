const AWS = require('aws-sdk')

const ssmClient = new AWS.SSM({
  apiVersion: '2014-11-06',
  region: 'ap-south-1'
});

const environment = 'passString'

ssmClient.getParametersByPath({
  Path: `/mytoken/`,
  Recursive: true,
  WithDecryption: true
}, (err, data) => {
  console.log(data)
  if (data?.Parameters) {
    console.log(data.Parameters)
  }
});