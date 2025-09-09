const express = require("express");
const activityResultController = require("../controllers/activityResultController");
const { isTeacher } = require('../utils/roles');



const router = express.Router();

router.get("/", tokenExtractor, userExtractor, isTeacher, activityResultController.getActivityResults);
router.get("/:id", tokenExtractor, userExtractor, isTeacher, activityResultController.getActivityResultById);
router.post("/", tokenExtractor, userExtractor, isTeacher, activityResultController.createActivityResult);
router.put("/:id", tokenExtractor, userExtractor, isTeacher, activityResultController.updateActivityResult);
router.delete("/:id", tokenExtractor, userExtractor, isTeacher, activityResultController.deleteActivityResult);

module.exports = router;
