/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
