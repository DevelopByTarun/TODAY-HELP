var express = require("express");
var router = express.Router();
var logger = require("../database/logger");
var passportGoogle = require("./googleAuthentication");

router.get("/google",
passportGoogle.authenticate("google", {scope: ["https://www.googleapis.com/auth/plus.login"]}));

router.get("/google/callback",
passportGoogle.authenticate("google", {failureRedirect: "/"}),
function(request, response) {
    // Successful authentication
    logger.debug("Google Authentication Is Successfully Done");
    console.log("CallBACK CALL>>>>");
    response.redirect("http://localhost:9090/view/welcome.html");
});

module.exports = router;
