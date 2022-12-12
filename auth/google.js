<<<<<<< HEAD
const User = require("../models/userModel")
=======
const User = require("../models/userModel").default;
>>>>>>> e39ae32c8a3f08b103cc73b623744cbe52f9be25
const { issueToken } = require("../helper/user");
const passportGoogle = require("passport-google-oauth20");
const GoogleStrategy = passportGoogle.Strategy;

exports.googlePassport = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          const userInfo = {
            name: profile._json.name,
            email: profile._json.email,
            googleId: profile._json.sub,
            isEmailConfirmed: profile._json.email_verified,
          };
          const user = await User.findOrCreate({
            where: { googleId: userInfo.googleId, email: userInfo.email },
            defaults: userInfo,
          });
          done(null, user);
        } catch (err) {
          done(err, null);
        }
      }
    )
  );
};

exports.issueGoogleToken = async (req, res, next) => {
  try {
    const token = await issueToken(
      req.user.id,
      req.user.role,
      process.env.SECRET
    );
    return res.redirect(`/home?token=${token}`);
  } catch (err) {
    next(err);
  }
};
