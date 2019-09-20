var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var logger = require("../database/logger");

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:9090/auth/google/callback",
    profileFields: ["username", "email"]
},
function(accessToken, refreshToken, profile, done) {
    console.log("Call Back Call ",accessToken);
    process.nextTick(function() {
        console.log("Profile ",profile);
        logger.debug("******Inside Google Login User Profile******");
        logger.debug(profile);
        passport.serializeUser(function(user, done) {
            done(null, user);
        });
        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
        var User = require("../database/socialLoginSchema");
        User.findOne({"userid": profile.id}, function(err, user) {
            if(err) {
                return done(err);
            }
            if(user) {
                return done(null, user);
            }
            else {
                var newUser = new User();
                newUser.userid = profile.id;
                newUser.password = profile.displayName;
                newUser.save(function(err) {
                    if(err) {
                        throw err;
                    }
                    else {
                        return done(null, newUser);
                    }
                });
            }
        });
    })
}));

module.exports = passport;
