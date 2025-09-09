const express = require("express");
const activityController = require("../controllers/activityController");
const { isTeacher } = require('../utils/roles');

const router = express.Router();

router.get("/", tokenExtractor, userExtractor, isTeacher, activityController.getActivities);
router.get("/:id", tokenExtractor, userExtractor, isTeacher, activityController.getActivityById);
router.post("/", tokenExtractor, userExtractor, isTeacher, activityController.createActivity);
router.put("/:id", tokenExtractor, userExtractor, isTeacher, activityController.updateActivity);
router.delete("/:id", tokenExtractor, userExtractor, isTeacher, activityController.deleteActivity);

module.exports = router;
