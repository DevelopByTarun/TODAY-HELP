// Create a Module
        //angular.module("modulename",[depedentmodule names])
var app2 = angular.module("module2",[]);       
var app = angular.module("greetapp",["module2"]);
        