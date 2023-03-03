const express = require("express");
const router = express.Router();

const { register,login , myProfile, LogoutUser, searchUser, resetPassword, resetPasswordToken } = require("../Controllers/User");
const { isAuthenticated } = require("../middlewares/auth");

router.route("/user/new/").post( register );
router.route("/user/login").post(login ); 
router.route("/me").get(isAuthenticated, myProfile); 
router.route("/logout").get( LogoutUser); 
router.route("/search/:id").post( searchUser); 
router.route("/forgot/password").post(resetPasswordToken ); 
router.route("/reset/password/:token").put(resetPassword ); 

module.exports = router  