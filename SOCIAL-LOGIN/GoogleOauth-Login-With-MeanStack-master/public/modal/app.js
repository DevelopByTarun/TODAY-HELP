var app = angular.module("googleLoginApp", ['ngRoute']);
app.config([
    '$qProvider', function($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }
]);