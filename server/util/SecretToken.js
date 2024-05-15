require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

// Import necessary modules
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// // Export function to create JWT token
// module.exports.createSecretToken = (id) => {
//   // Generate JWT token with provided ID and secret key
//   return jwt.sign({ id }, process.env.TOKEN_KEY, {
//     expiresIn: 3 * 24 * 60 * 60, // Token expires in 3 days (in seconds)
//   });
// };



{/*This part exports a function named createSecretToken using module.exports. This function generates a JWT token using the provided id and a secret key loaded from the environment variable TOKEN_KEY.

createSecretToken: This function takes the id of the user as input and returns a JWT token.

jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn }): This method generates a new JWT token with the payload containing the id of the user. It signs the token using the secret key loaded from the TOKEN_KEY environment variable. The expiresIn option specifies the expiration time of the token in seconds. In this case, the token expires in 3 days (3 * 24 * 60 * 60 seconds).*/}