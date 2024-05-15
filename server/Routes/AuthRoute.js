const { Login } = require("../Controllers/LoginAuthController");

const { Signup } = require("../Controllers/SignupAuthController");

const { userVerification } = require("../Controllers/userVerification");

const router = require("express").Router();

router.post("/signup", Signup)
      .post('/login', Login)
      .post('/', userVerification)



module.exports = router;