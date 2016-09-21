angular.module('todomvc', ['ngRoute', 'ngResource', 'ngRedux'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html'
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	}).config(function ($ngReduxProvider) {
		const rootReducer = Redux.combineReducers({todoState});
    $ngReduxProvider
      .createStoreWith(rootReducer, [ReduxThunk.default]);
  }).service('todoActions', todoActions).name
