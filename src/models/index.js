const mongoose = require('mongoose');

const entriesSchema = require('./entries.model');

const collectionEntries = mongoose.model('EntriesCollection', entriesSchema);

module.exports = {
  collectionEntries,
};
