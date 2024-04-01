const mongoose = require("mongoose");
const shortId = require("shortid");

const urlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortId.generate,
    },
    clicks: {
        type: Number,
        default: 0,
        required: true,
    },
});

module.exports = mongoose.model("urlModel", urlSchema);
