import {ADD_TODO} from '../constants/index.js';

export function todoState(state={todos:[], filterStatus:'', editTodo: null}, action){
	if(action.type === ADD_TODO){
		var newState = {
			todos: state.todos.map(function(item) {return item}).concat({id:1, text: action.value, status: 'active', checked: false}),
			filterStatus: state.filterStatus,
			editedTodo: state.editedTodo
		}
		return newState;
	} else if(action.type === "TOGGLE_TODO") {
		var newState = {
			todos: state.todos.map(function(todo){
				if(action.todo.text === todo.text) {
					todo.status = action.checked ? 'completed': 'active';
					todo.checked = action.checked;
				}
				return todo
			}),
			filterStatus: state.filterStatus,
			editedTodo: state.editedTodo
		}
		return newState;
	} else if(action.type === "EDIT_TODO") {
		var newState = {
			todos: state.todos,
			filterStatus: state.filterStatus,
			editedTodo: action.todo
		}
		return newState;
	} else if(action.type === "REVERT_EDIT") {
		return Object.assign({}, state, {editedTodo: null});
	} else if(action.type === "REMOVE_TODO") {
		var todos = state.todos.filter(function(todo) {
			return !(todo.text === action.todo.text)
		})
		return Object.assign({}, state, {todos: todos});
	} else if(action.type === 'CHANGE_FILTER') {
		// let todos = action.status === '' ? state.todos : state.todos.filter(function(todo) {
		// 	return todo.filterStatus === action.status
		// })
		return Object.assign({}, state, {filterStatus: action.status})
	}
	else
		return state;
}
