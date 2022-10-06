
exports.handler = async (event) => {
  var AWS = require("aws-sdk");
  AWS.config.update({ region: "ap-south-1"});
  var client = new AWS.DynamoDB();
 var params = {
      ExpressionAttributeNames: {
   "#Y": "Genre"
  },
  ExpressionAttributeValues: {
 
   ":y": {
     S: "Action"
    }
  },
  Key: {
   "Movie": {
     S: "3 Idiots"
    },
   "Director": {
     S: "Rajkumar Hirani"
    }
  },
  ReturnValues: "ALL_NEW",
  TableName: "myFavoriteMoviesData2",
  UpdateExpression: "SET #Y = :y"
 }
 
 return client.updateItem(params).promise();
 
};