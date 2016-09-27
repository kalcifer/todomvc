import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {todoActions} from './actions/todoActions.js';
import {todoState} from './reducers/todoInput.js';
import ngRedux from 'ng-redux';

angular.module('todomvc', ['ngRoute', 'ngResource', 'ngRedux'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
				store: function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	}).config(function ($ngReduxProvider) {
		const rootReducer = combineReducers({todoState});
    	$ngReduxProvider
      		.createStoreWith(rootReducer, [thunk]);
  }).service('todoActions', todoActions).name
