'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/route', (req, res) =>
  res.send('this is new html', { root: '.'})
);

app.post('/articles', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function() {
  console.log('We are serving this up to localhost:' + PORT);
});
