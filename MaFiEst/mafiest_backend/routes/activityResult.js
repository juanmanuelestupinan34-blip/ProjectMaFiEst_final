const express = require("express");
const activityResultController = require("../controllers/activityResultController");

const router = express.Router();

router.get("/", activityResultController.getActivityResults);
router.get("/:id", activityResultController.getActivityResultById);
router.post("/", activityResultController.createActivityResult);
router.put("/:id", activityResultController.updateActivityResult);
router.delete("/:id", activityResultController.deleteActivityResult);

module.exports = router;
