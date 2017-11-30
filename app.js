const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(indexPath);
})

const port = process.env.PORT || '4243';

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('Running'));

