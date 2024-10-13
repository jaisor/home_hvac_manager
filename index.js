const config = {
  httpPort: process.env.HTTP_PORT
};

const express = require('express');
const app = express();
const port = parseInt(config.httpPort, 10);

app.get('/', (req, res) => {
  res.send('sup')
});


app.listen(port, () => {
  console.log(`Home HVAC manager listening on port ${port}`);
});