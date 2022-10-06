# AWS DYNAMO DB CRUD OPERATIONS

Creating dynamo db and doing CRUD operations in it using SAM.

## Steps Involved
- Create IAM User from AWS Console
- Download SAM and setup it with IAM User credentials in local environment.
- Giving DynamopDb and lambda permissions to IAM User.
- Create lambda functions for operations in AWS Dynamo Db.
- Deploying lambda functions through SAM Script.

##  About

### Lambda Functions
#### create-dynamodb
This Lambda creates an AWS DynamoDb table.
#### get-item
This Lambda function fetches an item from DynamoDb table.
#### put-item
This Lambda function adds an item in DynamoDb table.
#### update-item
This Lambda function updates an item in DynamoDb table .