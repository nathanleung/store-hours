'use strict';

angular.
  module('storeApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/cards', {
          template: '<store-cards></store-cards>'
        }).
        when('/list', {
          template: '<store-list></store-list>'
        }).
        otherwise('/cards');
    }
  ]);