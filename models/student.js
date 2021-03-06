const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({


    name: {
        type: String,

    },

    email: {
        type: String,

    },

    password: {
        type: String
    },

    roll_no: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
    },
    addmission_year: {
        type: String,
    },
    phone_no: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    sem: {
        type: String
    },
    taken: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);