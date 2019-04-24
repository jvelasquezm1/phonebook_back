const { entriesController } = require('../controllers');

module.exports = function (app) {
  app.get('/readEntries', entriesController.readEntries);
  app.post('/addEntries', entriesController.addEntries);
  app.put('/editEntries', entriesController.editEntries);
};
