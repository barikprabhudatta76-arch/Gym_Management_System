// routes/memberRoutes.js
const express = require("express");
const router = express.Router();
const controller=require("../controller/memberController")

router.get("/", controller.getMembers);
router.post("/", controller.createMember);
router.get("/:id", controller.getMember);
router.put("/:id", controller.updateMember);
router.delete("/:id", controller.deleteMember);

module.exports = router;
