function todoActions() {
	return {
		addTodo,
		markAll,
		toggleCompleted,
		editTodo,
		revertEdit,
		removeTodo,
		changeFilter
	}
}

function addTodo(inputValue) {
	console.log('adding todo');
	return {
		type: ADD_TODO,
		value: inputValue
	}
}

function markAll(){
	return {
		type: 'MARK_ALL'
	}
}

function toggleCompleted(todo, checked) {
	return {
		type: "TOGGLE_TODO",
		todo: todo,
		checked: checked
	}
}

function editTodo(todo){
	return {
		type: "EDIT_TODO",
		todo: todo
	}
}

function revertEdit(){
	return {
		type: "REVERT_EDIT"
	}
}

function removeTodo(todo){
	return {
		type: "REMOVE_TODO",
		todo: todo
	}
}

function changeFilter(status){
	return {
		type: "CHANGE_FILTER",
		status: status
	}
}