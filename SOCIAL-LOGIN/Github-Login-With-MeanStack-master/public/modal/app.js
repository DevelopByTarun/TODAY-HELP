var app = angular.module("githubLoginApp", ['ngRoute']);
app.config([
    '$qProvider', function($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }
]);