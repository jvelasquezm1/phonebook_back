const mongo = process.env.MONGO_URL || 'mongodb://localhost:27017/phonebook';

const mongoose = require('mongoose');

exports.connectDB = function () {
  return mongoose.connect(mongo, { useNewUrlParser: true, useFindAndModify: false });
};

exports.closeDB = async function () {
  return mongoose.connection.close();
};
