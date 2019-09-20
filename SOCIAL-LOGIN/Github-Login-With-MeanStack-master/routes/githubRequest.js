var express = require("express");
var router = express.Router();
var logger = require("../database/logger");
var passportGitHub = require("./githubAuthentication");

router.get("/github",
passportGitHub.authenticate("github", {scope: ["email"]}));

router.get("/github/callback",
passportGitHub.authenticate("github", {failureRedirect: "/"}),
function(request, response) {
    // Successful authentication
    logger.debug("Github Authentication Is Successfully Done");
    console.log("CallBACK CALL>>>>");
    response.redirect("http://localhost:9090/view/welcome.html");
});

module.exports = router;
