// controllers/memberController.js
const Member = require("../model/Member");

// GET ALL
exports.getMembers = async (req, res) => {
    const members = await Member.find().sort({ createdAt: -1 });
    res.json(members);
};

// CREATE
exports.createMember = async (req, res) => {
    try {
        const member = await Member.create(req.body);
        res.status(201).json(member);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET SINGLE
exports.getMember = async (req, res) => {
    const member = await Member.findById(req.params.id);
    res.json(member);
};

// UPDATE
exports.updateMember = async (req, res) => {
    const member = await Member.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(member);
};

// DELETE
exports.deleteMember = async (req, res) => {
    await Member.findByIdAndDelete(req.params.id);
    res.json({ message: "Member deleted" });
};
