// Create a Factory or Service (Model)
        // factory must return an object
        app.factory("myfactory",function(){
            var object = {}; // define an object
            object.factoryvariable="Hi im factory variable";
            return object;
        });

   app2.factory("modulefactory",function(){
            var object = {
                age:21
            }; // define an object
            
            return object;
        });
        