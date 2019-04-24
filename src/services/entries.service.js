const {
    collectionEntries
} = require('../models');

exports.readEntries = async () => {
    try {
        const entries = await collectionEntries.find();
        return entries;
    } catch (err) {
        console.log(err)
        throw new Error('Error reading the entries');
    }
};

exports.addEntries = async (entry) => {
    try {
        const entries = await collectionEntries.create(entry);
        return entries;
    } catch (err) {
        console.log(err)
        throw new Error('Error creating the entry');
    }
};

exports.editEntries = async (entry) => {
    try {
        const entries = await collectionEntries.findByIdAndUpdate(entry.id, entry);
        return entries;
    } catch (err) {
        console.log(err)
        throw new Error('Error updating the entry');
    }
};
