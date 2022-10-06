var AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1"});
// var documentClient = new AWS.DynamoDB.DocumentClient();
var client = new AWS.DynamoDB();
exports.handler = async (event) => {
      var params = {
       TableName: "myFavoriteMoviesData2",
  Item: {
    Movie: { S: "Terminator" },
    Director: { S: "Koster" },
    Genre: { S: "Comedy" }
  }
    };
   
    return client.putItem(params).promise();

};