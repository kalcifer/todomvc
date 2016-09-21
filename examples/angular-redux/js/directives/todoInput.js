angular.module('todomvc')
	.directive('todoInput', function todoInput() {
		return {
    restrict:'E',
    template: '<form id="todo-form" ng-submit="addNewTodo()"><input id="new-todo" autocomplete="off" placeholder="What needs to be done?" ng-model="newTodo" ng-disabled="saving" autofocus></form>',
    controller: todoInputController,
    scope : {},
    link:function(scope){
      console.log('Here in todoInput')
    }
  }
})

function todoInputController($ngRedux, $scope) {
	const unsubscribe = $ngRedux.connect(null, todoActions())($scope);
	$scope.$on('$destroy', unsubscribe);
	$scope.addNewTodo = function() {
		$scope.addTodo($scope.newTodo)
		$scope.newTodo = '';
	}
}
