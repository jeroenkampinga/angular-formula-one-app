'use strict';

/**
 * @ngdoc function
 * @name formulaOneAppApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the formulaOneAppApp
 */

var formulaOneMenuController = angular.module('formulaOneMenuController', []);

formulaOneMenuController.controller('appMenuController',function appMenuController ($scope, $location){
	
	$scope.getClass = function (path) {
		if(path === '/') {
			if($location.path() === '/') {
				return 'active';
			} else {
				return '';
			}
		}
 
		if ($location.path().substr(0, path.length) === path) {
			return 'active';
		} else {
			return '';
		}
	};
});