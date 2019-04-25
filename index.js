const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

require('dotenv').config();
const initDatabases = require('./src/db/DB');

const app = express();
app
  .use(bodyParser.json({
    limit: '50mb',
  }))
  .use(cors())
  .use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  }));

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

// Health check
app.get('/', (req, res) => {
  res.send('Test Wemanity');
});

initDatabases.connectDB().then(() => {
  console.log('DB Connected Succesfully');
}).catch((err) => {
  console.error('Failed to make database connection!');
  console.error(err);
});

require('./src/routes/routes.js')(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
