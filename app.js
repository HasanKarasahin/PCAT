const express = require('express');
const path = require('path');

const app = express();

const fnLog = (req, res, next) => {
  console.log('Log atildi.');
  next();
};

app.use(express.static('public'));
app.use(fnLog);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
