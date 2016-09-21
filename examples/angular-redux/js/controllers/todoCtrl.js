angular.module('todomvc')
	.controller('TodoCtrl', function TodoCtrl($scope, $routeParams, $ngRedux) {
		'use strict';

		const unsubscribe = $ngRedux.connect(null, todoActions())($scope);
		$scope.$on('$destroy', unsubscribe);
		// Monitor the current route for changes and adjust the filter accordingly.
		$scope.$on('$routeChangeSuccess', function () {
			$scope.changeFilter($routeParams.status || '');
		});
	});
