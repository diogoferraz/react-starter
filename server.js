/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.engine('.html', require('ejs').__express);

app.set('view engine', 'html');

app.use(express.static(`${__dirname}/dist`));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.render(`${__dirname}/dist/index.html`);
});

const server = app.listen(3000, () => {});
const host = server.address().address;
const { port } = server.address();
console.log('App listening at http://%s:%s', host, port);
