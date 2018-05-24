const express = require('express');
const Storage = require('@google-cloud/storage');

const app = express();
const storage = Storage();

const bucketName = process.env.GCLOUD_STORAGE_BUCKET || '';

app.get('/', (req, res) => {
  // Real short record for now...
  res.status(200).json('{"name": "Foo"}');
});

app.all('/records/*', (req, res, next) => {
  const auth = req.get('Authorization')

  // TODO NOT SECURE, just here to test ability to guard with
  // header check in newer version
  if (!auth || auth !== 'Bearer Mw2esKHyImZ69OrW29t12Q') {
    res.sendStatus(403);
    return;
  }

  next();
});

app.get('/records/:id(\\d{10})', (req, res) => {
  storage
    .bucket(bucketName)
    .file(req.params["id"])
    .download((err, contents) => {
      if(err) {
        res.status(500).json('{"error": "Oops"}');
        console.error(err);
        return;
      }

      // contents should already be JSON
      res.type('json').send(contents);
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
