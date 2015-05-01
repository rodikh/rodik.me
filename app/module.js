var app = angular.module('rodikme', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider.
        when('/', {
            id: 'home',
            templateUrl: 'app/templates/home.html',
            controller: 'HomeCtrl'
        }).
        when('/projects/fractals/', {
            templateUrl: 'projects/fractals/partial.html'
        });
        //when('/', {
        //    templateUrl: 'app/templates/home.html',
        //    controller: 'HomeCtrl'
        //});
}).run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(ev,data) {});
});