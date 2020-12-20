const express = require('express');
const path = require('path');
const port = 5000;
const app = require('express')();

// socket.io code
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static("app"));
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.sendFile('/views/main.html',{ root: __dirname });
})

// function onConnection(socket){
//   socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
// }

// io.on('connection', onConnection);

// process.env.PORT for heroku deployment
http.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });