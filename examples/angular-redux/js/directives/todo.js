angular.module('todomvc')
	.directive('todo', function todo() {
		return {
    restrict:'E',
    templateUrl: 'todo.html',
    controller: todoController,
    scope : {
			todo: "="
		},
    link:function($scope){

    }
  }
})

function todoController($ngRedux, $scope) {
	$scope.checked = false
	$scope.toggle = function(){
		$scope.toggleCompleted($scope.todo, $scope.checked);
	}
	$scope.edit = function(){
		$scope.editTodo($scope.todo);
	}
	$scope.revert = function() {
		$scope.revertEdit();
	}
	$scope.remove = function() {
		$scope.removeTodo($scope.todo);
	}
	const unsubscribe = $ngRedux.connect(function(state){
		return {editedTodo: state.todoState.editedTodo};
	}, todoActions())($scope);
	$scope.$on('$destroy', unsubscribe);
}
