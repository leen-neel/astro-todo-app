function getTodos() {
	return JSON.parse(localStorage.getItem('todos'));
}

const setTodos = (todos) => {
	localStorage.setItem('todos', JSON.stringify(todos));
};

// Adds a todo to the localstorage
const addTodo = (todoTitle) => {
	let allTodos = JSON.parse(localStorage.getItem('todos')) || [];

	let newTodo = {
		title: todoTitle,
		date: new Date().toLocaleString(),
		done: false,
	};

	if (localStorage.length == 0) {
		localStorage.setItem('todos', JSON.stringify([newTodo]));
	} else {
		allTodos.push(newTodo);
		localStorage.setItem('todos', JSON.stringify(allTodos));
	}
};

export { addTodo, getTodos, setTodos };
