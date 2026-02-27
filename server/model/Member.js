// models/Member.js
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Member", memberSchema);
