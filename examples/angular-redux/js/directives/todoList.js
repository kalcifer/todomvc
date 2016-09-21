angular.module('todomvc')
	.directive('todoList', function todoList() {
		return {
    restrict:'E',
    templateUrl: 'todo-list.html',
    controller: todoListController,
    scope : {},
    link:function(scope){
      console.log('here in todoList')
    }
  }
})

function todoListController($ngRedux, $scope) {
	$scope.toggle = function(todo){
		$scope.toggleCompleted(todo);
	}
	const unsubscribe = $ngRedux.connect(mapStateToThis, todoActions())($scope);
	$scope.$on('$destroy', unsubscribe);
	function mapStateToThis(state) {
    return {
			todos: state.todoState.todos.filter(function(todo){
				return state.todoState.filterStatus === '' || todo.status === state.todoState.filterStatus
			})
		}
  }

}
