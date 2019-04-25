const { entriesController } = require('../controllers');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.get('/readEntries', entriesController.readEntries);
  app.get('/getEntryById/:entryId', entriesController.getEntryById);
  app.post('/addEntries', entriesController.addEntries);
  app.put('/editEntries', entriesController.editEntries);
};
