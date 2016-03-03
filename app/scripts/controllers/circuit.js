'use strict';

/**
 * @ngdoc function
 * @name formulaOneAppApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the formulaOneAppApp
 */

var formulaOneCircuitControllers = angular.module('formulaOneCircuitControllers', []);

formulaOneControllers.controller('circuitController',function circuitController ($scope,$http){
  $http.get('http://ergast.com/api/f1/current/circuits.json').success(function(data) {
    $scope.circuitInfo = data.MRData.CircuitTable.Circuits;
    //$scope.lastRaceDriver = data.MRData.RaceTable.Races[0].Results;
    console.log($scope.circuitInfo);
  });
});