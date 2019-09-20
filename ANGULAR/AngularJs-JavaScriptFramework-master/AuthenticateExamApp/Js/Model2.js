app2.factory("myFact2", ($http, $q)=> {
            var object = {
                mockTest: () => {
                    var pr = $q.defer();
                    var url = "../Json/MockTest.json";
                    $http.get(url).then(function(data) {
                            pr.resolve(data.data);
                            console.log("Data is Success...", data);
                        }
                        );
                    return pr.promise;
                }
            }
            return object;
        });