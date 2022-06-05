'use strict';

module.exports.handlerFunction = async (event, context) => {
  console.log("I am inside aws lambda function");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Alright, It is working!" }),
  };
};