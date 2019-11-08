const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const authConfig = require('../src/auth_config');

const app = express();

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

app.get('/api/external', checkJwt, (req, res) => {
  res.send({ msg: "Your Access Token was successfully validated!" });
});

// Start the app
app.listen(
  3001,
  err => err ?
    console.error(`An error occurred: ${err}`) :
    console.log('API listening on :3001')
);
