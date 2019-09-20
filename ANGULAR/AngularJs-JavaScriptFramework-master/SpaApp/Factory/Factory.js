app.factory("offersFactory", ($http, $q) => {
            var object = {
                callServer: () => {
                    var pr = $q.defer();
                    var url = "../Json/SpaOffers.json";
                    $http.get(url).then(function(data) {
                        pr.resolve(data.data);
                        console.log("Data is Success...", data);
                    }, function(err) {
                        pr.reject(err);
                        console.log("Data is Error");
                    });
                    return pr.promise;
                }
            }
            return object;
        });