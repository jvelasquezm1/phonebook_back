const qs = require('qs');
const {
  entriesService,
} = require('../services');

exports.getEntryById = async (req, res) => {
  const { entryId } = req.params;
  try {
    const entry = await entriesService.getEntryById(entryId);
    res.json(entry);
  } catch (err) {
    res.json([]);
  }
};

exports.readEntries = async (req, res) => {
  try {
    const entries = await entriesService.readEntries();
    res.json(entries);
  } catch (err) {
    res.json([]);
  }
};

exports.addEntries = async (req, res) => {
  const entry = qs.parse(req.body);
  try {
    const createdEntry = await entriesService.addEntries(entry);
    res.json(createdEntry);
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

exports.editEntries = async (req, res) => {
  const entry = qs.parse(req.body);
  try {
    const updatedEntry = await entriesService.editEntries(entry);
    res.json(updatedEntry);
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};
