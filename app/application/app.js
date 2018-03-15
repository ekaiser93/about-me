// route provider
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

});

console.log('I am working');
