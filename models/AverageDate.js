const mongoose = require("mongoose");

const AverageDateSchema = new mongoose.Schema({
    accession_no: {
        type: String
    },
    title: {
        type: String
    },
    average: {
        type: Number

    },
    author: {
        type: String,

    },

    publisher: {
        type: String,

    },
    countss: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("AvgDate", AverageDateSchema);