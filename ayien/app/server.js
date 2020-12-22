const path = require('path');

const express = require('express');
const app = require('express')();

const port = 4000;

app.use(express.static("app"));
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.sendFile('/views/main.html',{ root: __dirname });
})

// process.env.PORT for heroku deployment
app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });