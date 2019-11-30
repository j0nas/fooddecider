const jsonServer = require('json-server');
const checkJwt = require('./middlewares/checkJwt');

const app = jsonServer.create();
app.use(jsonServer.defaults());
app.use(jsonServer.bodyParser);
// app.use(checkJwt);

app.get('/api/external', (req, res) =>
  res.send({ msg: 'Your Access Token was successfully validated!' }));

app.use(jsonServer.router('./server/db.json'));
app.listen(
  3001,
  err => err ?
    console.error(`An error occurred: ${err}`) :
    console.log('API listening on :3001')
);
