const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    name: String,
    category: String,
    value: Number,
    assignedTo: String
});

module.exports = mongoose.model('Asset', assetSchema);
