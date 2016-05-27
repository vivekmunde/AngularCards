angular.module('jPlayersMod', ['ngRoute', 'jCardsMod'])
    .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.when('/topScorers', {
                    templateUrl: '/views/topScorers.html'
                }).when('/players', {
                    templateUrl: '/views/players.html'
                }).when('/goalKeepers', {
                    templateUrl: '/views/goalKeepers.html'
                }).when('/strikers', {
                    templateUrl: '/views/strikers.html'
                }).otherwise('/topScorers');
            }]);
