angular.module('todomvc')
	.directive('todoFilter', function todo() {
		return {
    restrict:'E',
    templateUrl: 'todo-filter.html',
    controller: filterController,
    scope : {},
    link:function($scope){
      console.log('Here in todoFilter')
    }
  }
})

function filterController($ngRedux, $scope) {
	const unsubscribe = $ngRedux.connect(function(state){
		return {status: state.todoState.filterStatus}
	})($scope);
	$scope.$on('$destroy', unsubscribe);
}
