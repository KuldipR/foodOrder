const express = require(`express`);

const router = express.Router();

const userControl = require("../Controllers/userController")




router.route("/").get(userControl.getAllUser).post(userControl.createUser)
router.route("/:id").post(userControl.createUser).patch(userControl.updateUser).delete(userControl.deleteUser)

module.exports = router;