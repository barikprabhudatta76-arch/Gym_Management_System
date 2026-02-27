// controllers/planController.js

const Plan = require("../model/Plan");
const User = require("../model/User");

// Get all plans
exports.getPlans = async (req, res) => {
    const plans = await Plan.find().sort({ createdAt: -1 });
    res.json(plans);
};

// Create plan
exports.createPlan = async (req, res) => {
    try {
        const plan = await Plan.create(req.body);
        res.status(201).json(plan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get single plan
exports.getPlan = async (req, res) => {
    const plan = await Plan.findById(req.params.id);
    res.json(plan);
};

// Update plan
exports.updatePlan = async (req, res) => {
    const plan = await Plan.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(plan);
};

// Delete plan
exports.deletePlan = async (req, res) => {
    await Plan.findByIdAndDelete(req.params.id);
    res.json({ message: "Plan deleted" });
};


// Book plan for a user
exports.bookPlan = async (req, res) => {
    try {
        const planId = req.params.id;
        const { userId } = req.body; // send logged-in user's id in body

        const plan = await Plan.findById(planId);
        if (!plan) return res.status(404).json({ message: "Plan not found" });

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.plan = plan._id; // assign the plan to user
        await user.save();

        res.json({ message: "Plan booked successfully", plan });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Booking failed" });
    }
};
