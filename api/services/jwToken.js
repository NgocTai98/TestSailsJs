const jwt = require('jsonwebtoken'),
  tokenSecret = "secretkey";
module.exports = {
  // Generates a token from supplied payload
  issue(payload) {
    return jwt.sign(
      payload,
      tokenSecret, 
      {
        algorithm: 'HS256',
        expiresIn: '7d' 
      });
  },
  // Verifies token on a request
  verify(token, callback) {
    return jwt.verify(
      token, 
      tokenSecret,
      {}, 
      callback
    );
  },
  decode(token){
    return jwt.decode(token);
  }
};
