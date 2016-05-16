angular.module('jContentCardsMod', ['ngRoute', 'jCardsMod'])
    .config(['$routeProvider', 
            function($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: '/views/goalKeepers.html'
                }).when('/strikers', {
                    templateUrl: '/views/strikers.html'
                }).otherwise('/');
            }]);