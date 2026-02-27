// routes/planRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controller/planController");

router.get("/", controller.getPlans);
router.post("/", controller.createPlan);
router.get("/:id", controller.getPlan);
router.put("/:id", controller.updatePlan);
router.delete("/:id", controller.deletePlan);

router.post("/:id/book", controller.bookPlan);

module.exports = router;
