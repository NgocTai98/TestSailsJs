const jwt = require('jsonwebtoken'),
  tokenSecret = "secretkey";
module.exports = {
  // Generates a token from supplied payload
  issue(payload) {
    return jwt.sign(
      payload,
      tokenSecret, // Token Secret that we sign it with
      {
        algorithm: 'HS256',
        expiresIn: 606024*30 * 7 // Token Expire time
      });
  },
  // Verifies token on a request
  verify(token, callback) {
    return jwt.verify(
      token, // The token to be verified
      tokenSecret, // Same token we used to sign
      {}, // No Option, for more see https://github.com/auth0/nodejsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
      callback //Pass errors or decoded token to callback
    );
  }
};
