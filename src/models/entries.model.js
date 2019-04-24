const { Schema } = require('mongoose');

const entriesSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
},
{
  collection: 'EntriesCollection',
  timestamps: { createdAt: true, updatedAt: true },
});

module.exports = entriesSchema;
