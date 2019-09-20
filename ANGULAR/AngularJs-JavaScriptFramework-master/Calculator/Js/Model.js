app.factory("CalculatorFactory", () => {
    var object = {
        plus: (x, y) => {
            return parseInt(x) + parseInt(y);
        },
        minus: (x, y) => {
            return x - y;
        },
        multiply: (x, y) => {
            return x * y;
        },
        divide: (x, y) => {
            return x / y;
        }
    }
    return object;
});