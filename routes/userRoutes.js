const express = require('express');
const bouncer =require("../helper/bruteprotect")
const router = express.Router();
const passport=require('passport')
<<<<<<< HEAD
const { registerValidate ,loginValidate} = require('../validator/user');
const {registerUser,loginUser,updateUserInfo,protected,
       confirmEmail,forgotPassword,resetPassword}=require('../controllers/userController')
=======
const { registerValidate ,loginValidate,passwordChangeValidate} = require('../validator/user');
const {registerUser,loginUser,updateUserInfo,getCurrentLogedUser,
       getUserById,getUsers,confirmEmail,changePassword,
       forgotPassword,resetPassword}=require('../controllers/userController')
>>>>>>> 637cb484060fd9afe54545ce0a85675349115aa6
const {errorHandler}=require('../middleware/errohandling.middleware')
const {authenticateJWT}=require('../middleware/auth.middleware');
const {issueGoogleToken}=require("../auth/google");
const { authAdmin } = require('../middleware/role.middleware');

// bouncer.blocked = function (req, res, next, remaining)
// {
//     return res.status(429).
//     json ({message:`You have end you login attempt, please wait ${Math.round((remaining / 60000))} minutes`});
// };

router.post('/register',registerValidate(),registerUser,errorHandler);
router.post('/login',loginValidate(),bouncer.block,loginUser,errorHandler);
router.put('/updateuser/:id',authenticateJWT,updateUserInfo,errorHandler);
<<<<<<< HEAD
=======
router.put('/changemypassword/',authenticateJWT,passwordChangeValidate(),changePassword,errorHandler);
>>>>>>> 637cb484060fd9afe54545ce0a85675349115aa6
router.get('/confirm',confirmEmail,errorHandler);
router.post('/forgotpassword',forgotPassword,errorHandler);
router.post('/resetpassword',resetPassword,errorHandler);
router.get('/getusers',authenticateJWT,authAdmin,getUsers,errorHandler);
router.get('/getuserbyid/:id',authenticateJWT,authAdmin,getUserById,errorHandler);
router.get('/getlogeduser',authenticateJWT,getCurrentLogedUser,errorHandler);

<<<<<<< HEAD

=======
//google auth
>>>>>>> 637cb484060fd9afe54545ce0a85675349115aa6
router.get("/auth/google", passport.authenticate("google", {session: false,scope: ["email","profile"] }));
//issue token on success
router.use("/auth/google/callback",
passport.authenticate("google", 
{
session: false,
failureRedirect: "http://localhost:3000/login",
}),issueGoogleToken,errorHandler);


module.exports = router;