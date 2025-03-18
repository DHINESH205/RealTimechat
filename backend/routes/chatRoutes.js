const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats, createGroupChat, removeFromGroup, addToGroup, renameGroup } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat).get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/group/remove").put(protect, removeFromGroup);
router.route("/group/add").put(protect, addToGroup);

module.exports = router;
