'use strict';

/**
 * @ngdoc function
 * @name formulaOneAppApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the formulaOneAppApp
 */

var formulaOneResultControllers = angular.module('formulaOneResultControllers', []);

formulaOneResultControllers.controller('resultController',function resultController ($scope,$routeParams,$http){
  
  if(!$routeParams.seizoenId){
    $routeParams.seizoenId = 'current';
  }

  $http.get('http://ergast.com/api/f1/' + $routeParams.seizoenId + '/driverStandings.json').success(function(data) {
    $scope.result = data.MRData.StandingsTable.StandingsLists[0];
    $scope.resultSeason = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    $scope.prevSeasons = [{'jaar':'2015'},{'jaar':'2014'},{'jaar':'2013'},{'jaar':'2012'},{'jaar':'2011'},{'jaar':'2010'},{'jaar':'2009'},{'jaar':'2008'},{'jaar':'2007'},{'jaar':'2006'},{'jaar':'2005'},{'jaar':'2004'},{'jaar':'2003'},{'jaar':'2002'},{'jaar':'2001'},{'jaar':'2000'}];
    console.log($scope.result);

  });
});