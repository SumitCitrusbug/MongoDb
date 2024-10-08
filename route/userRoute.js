const express = require("express");
const router = express.Router();
//impoer controler
const {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
} = require("../controller/userController");

router
  .get("/", getUser)
  .post("/", createUser)
  .get("/:id", getUserById)
  .get("/delete/:id", deleteUser)
  .post("/edit/:id", updateUser);
// .delete("/:id", deleteUser)
// .put("/:id", updateUser);

module.exports = router;
