app.factory("myFact", ($http, $q)=> {
            var object = {
                authenticate: () => {
                    var pr = $q.defer();
                    var url = "../Json/Authenticate.json";
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