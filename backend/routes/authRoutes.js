const { register, login } = require("../controllers/userController");
const { checkUser } = require("../middleWares/authController");
const router = require("express").Router();

//different routes, include the protected "checkUser"
router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);

module.exports = router;
