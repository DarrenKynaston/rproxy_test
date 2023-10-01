const express = require('express');
const app = express();
const helmet = require('helmet');

const port = 3000;

app.use(helmet());

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/another', (req, res) => {
  res.send('Another, World!!!!!!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});