const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // Real short record for now...
  res.status(200).send('{"name": "Foo"}');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
