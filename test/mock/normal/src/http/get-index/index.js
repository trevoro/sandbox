// Boilerplate Lambda function pulled from AWS
exports.handler = async (event) => {
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Architect Sandbox running the default runtime!'),
  };
  return response;
};
