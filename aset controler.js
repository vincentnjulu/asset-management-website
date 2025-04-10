const Asset = require('../models/Asset');

exports.getAssets = async (req, res) => {
    const assets = await Asset.find();
    res.json(assets);
};

exports.createAsset = async (req, res) => {
    const asset = new Asset(req.body);
    await asset.save();
    res.status(201).json(asset);
};
