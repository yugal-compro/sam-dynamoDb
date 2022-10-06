
//var ddb = new AWS.DynamoDB.DocumentClient({ region:'ap-south-1' });


exports.handler = async (event) => {
   
  var AWS = require('aws-sdk');
  AWS.config.update({region: 'ap-south-1'});
  var client = new AWS.DynamoDB();

    const params = {
  AttributeDefinitions: [
    {
      AttributeName: "Movie",
      AttributeType: "S",
    },
    {
      AttributeName: "Director",
      AttributeType: "S",
    }
  ],
  KeySchema: [
    {
      AttributeName: "Movie",
      KeyType: "HASH",
    },
    {
      AttributeName: "Director",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "myFavoriteMoviesData2",
  StreamSpecification: {
    StreamEnabled: false,
  },
};

// client.createTable(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//     return err;
//   } else {
//     console.log("Table Created", data);
//     return data;
//   }
// });
    return client.createTable(params).promise();
};