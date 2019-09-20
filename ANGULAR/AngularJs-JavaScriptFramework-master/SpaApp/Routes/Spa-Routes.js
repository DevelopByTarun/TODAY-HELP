app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
            templateUrl: "Home.html"
        })
        .when("/offers/:count/:discount", {
            templateUrl: "Offers.html",
            controller: "offersCtrl"
        })
        .when("/contact", {
            templateUrl: "ContactUs.html",
            controller: "contactCtrl"
        })
        .when("/register", {
            templateUrl: "Register.html",
            controller: "registerCtrl"
        })
        .when("/login", {
            templateUrl: "Login.html",
            controller: "loginCtrl"
        })
        .otherwise({
            template: "<h1>Sorry, Don't Found Any File</h1>",
            redirectTo: "/"
        });
});


//app.config(($routeProvider, $locationProvider, OFFERS, CONTACT, REGISTER, LOGIN)=> {
//    $locationProvider.hashPrefix('');
//    $routeProvider.when("/", {
//        templateUrl:"Home.html"
//    })
//    .when(OFFERS, {
//        templateUrl:"Offers.html",
//        controller:"offersCtrl"
//    })
//    .when(CONTACT, {
//        templateUrl:"ContactUs.html",
//        controller:"contactCtrl"
//    })
//    .when(REGISTER, {
//        templateUrl:"Register.html",
//        controller:"registerCtrl"
//    })
//    .when(LOGIN, {
//        templateUrl:"Login.html",
//        controller:"loginCtrl"
//    })
//    .otherwise({
//        template:"<h1>Sorry, Don't Found Any File</h1>",
//        redirectTo:"/"
//    });
//});