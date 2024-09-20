const express = require("express");
const router = express.Router();
//impoer controler
const { index, read } = require("../controller/userController");

router.get("/", index);
router.get("/read", read);

module.exports = router;
