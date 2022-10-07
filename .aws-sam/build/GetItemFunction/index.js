
// var documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  var AWS = require("aws-sdk");
 AWS.config.update({ region: "ap-south-1"});
 var client = new AWS.DynamoDB();
   var params = {
  TableName: "myFavoriteMoviesData2",
  Key: {
    Movie: { S: "3 Idiots" },
    Director: {S: "Rajkumar Hirani"},
  }
//   ProjectionExpression: "Movie",
};
   
    return client.getItem(params).promise();

};