const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello DevOps - Deployed by NUR BATRISYIA</h1>');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.listen(port, () => {
  console.log('App running on http://localhost:' + port);
});
