app2.controller("mockCtrl", ($scope, myFact2) => {
    $scope.count = 1;
    var promise = myFact2.mockTest($scope.search);
    console.log("I Got the Promise...");
    promise.then((data) => {
        var result = data;
        result.filter(function (d) {
            if (d.Count == "1") {
                Ques(d);
            }
        });

    })

    // previous button
    $scope.callPrev = () => {
        $scope.count--;
        var promise = myFact2.mockTest($scope.search);
        promise.then((data) => {
            var result = data;
            result.filter(function (d) {
                if (d.Count == $scope.count) {
                    Ques(d);
                }
            });

        })
    }

    // next button
    $scope.callNext = () => {
        $scope.count++;
        var promise = myFact2.mockTest($scope.search);
        promise.then((data) => {
            var result = data;
            result.filter(function (d) {
                if (d.Count == $scope.count) {
                    Ques(d);
                }
            });

        })
    }

    // fetch question and options    
    function Ques(d) {
        $scope.Ques = d.question;
        $scope.Ans = d.options;
        $scope.Answer = d.answer;
    }
});