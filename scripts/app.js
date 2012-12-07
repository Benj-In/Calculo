'use strict'

var app = angular.module('Calculo', []);

app.controller('appCtrl', function($scope) {
	$scope.pad = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '', '+'];
	$scope.formula = ['0'];

	$scope.add = function(item) {
		($scope.formula == '0') ? $scope.formula = [item] : $scope.formula.push(item);
	};

	$scope.solve = function() {
		if(typeof eval($scope.formula.slice(-1)[0]) != "number") return eval($scope.formula.slice(0, $scope.formula.length - 1).join(''));
        else return eval($scope.formula.join(''));
	}

	$scope.clear = function() {
		$scope.formula = ['0'];
	}
});