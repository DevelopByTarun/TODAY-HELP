app.factory("GreetFactory", () => {
    var object = {
        initCap: (str) => {
            return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
        }
    }
    return object;
});