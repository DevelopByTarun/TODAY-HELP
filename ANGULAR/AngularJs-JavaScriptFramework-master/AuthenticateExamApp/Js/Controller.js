app.controller("loginCtrl", ($scope, myFact) => {
    $scope.getLogin = () => {
        var promise = myFact.authenticate($scope.search);
        console.log("I Got the Promise...");
        promise.then((data) => {
                var result1 = data;
                result1.filter(function (obj) {
                    if (obj.username == $scope.username && obj.password == $scope.password) {
                        window.location.assign("../Pages/ANGULARJS_QuestionBank.html")
                    }
                });
            }

        );
    }
});

//else {
//        window.alert('Sorry, Unable To Logged In....');
//                }

//$localStorage.username = $scope.username;