const express = require("express");
const activitySubmissionController = require("../controllers/activitySubmissionController");

const router = express.Router();

router.get("/", activitySubmissionController.getActivitySubmissions);
router.get("/:id", activitySubmissionController.getActivitySubmissionById);
router.post("/", activitySubmissionController.createActivitySubmission);
router.put("/:id", activitySubmissionController.updateActivitySubmission);
router.delete("/:id", activitySubmissionController.deleteActivitySubmission);

module.exports = router;
