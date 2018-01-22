const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token;

  if (authHeader) {
    token = authHeader.split(' ')[1];
  }

  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({
          error: 'Failed to authenticate'
        });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  } else {
    res.status(403).json({
      error: 'No token provided'
    })
  }
}
