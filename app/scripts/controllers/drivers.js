'use strict';

/**
 * @ngdoc function
 * @name formulaOneAppApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the formulaOneAppApp
 */

var formulaOneControllers = angular.module('formulaOneControllers', []);

formulaOneControllers.controller('lastRaceController',function lastRaceController ($scope,$http){
  $http.get('http://ergast.com/api/f1/current/last/results.json').success(function(data) {
    $scope.lastRaceInfo = data.MRData.RaceTable.Races[0];
    $scope.lastRaceDriver = data.MRData.RaceTable.Races[0].Results;
    //console.log($scope.lastRaceInfo);
  });
});

formulaOneControllers.controller('driverInfoController',function driverInfoController ($scope,$http){
	$http.get('http://ergast.com/api/f1/2015/drivers.json').success(function(data) {
		$scope.driverInfo = data.MRData.DriverTable.Drivers;
		//console.log($scope.driverInfo);
	});
});

formulaOneControllers.controller('driverDetailController',function driverDetailController ($scope,$routeParams,$http){
    $http.get('http://ergast.com/api/f1/2015/drivers/' + $routeParams.coureurId + '.json').success(function(data) {
		$scope.driverDetail = data.MRData.DriverTable.Drivers[0];
		console.log($scope.driverDetail);
    });
});