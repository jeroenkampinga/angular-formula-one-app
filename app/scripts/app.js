'use strict';

var formulaOneApp = angular.module('formulaOneApp', ['ngRoute','formulaOneControllers','formulaOneMenuController','formulaOneResultControllers','formulaOneCircuitControllers']);


formulaOneApp.config(function($routeProvider) {
		$routeProvider.

			// Home
            when('/', {
                templateUrl : 'views/home.html',
                controller  : 'lastRaceController'
            }).

			when('/coureurs', {
				templateUrl: 'views/coureurs.html',
				controller: 'driverInfoController'
			}).

			when('/coureurs/:coureurId',{
				templateUrl: 'views/coureurs-detail.html',
				controller: 'driverDetailController'
			}).

			when('/circuits', {
				templateUrl: 'views/circuits.html',
				controller: 'circuitController'
			}).

			when('/resultaten', {
				templateUrl: 'views/resultaten.html',
				controller: 'resultController'
			}).

			when('/resultaten/:seizoenId',{
				templateUrl: 'views/resultaten.html',
				controller: 'resultController'
			}).

			otherwise({
				redirectTo: '/'
			});
	});


formulaOneApp.directive('onErrorSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src !== attrs.onErrorSrc) {
          attrs.$set('src', attrs.onErrorSrc);
        }
      });
    }
  };
});