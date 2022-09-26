import { format } from 'date-fns';

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
		id: allTodos.length + 1,
		title: todoTitle,
		date: `${format(new Date(), 'do MMMM, y')} at ${format(new Date(), 'p')}`,
		done: false,
	};

	if (localStorage.length == 0) {
		localStorage.setItem('todos', JSON.stringify([newTodo]));
	} else {
		allTodos.push(newTodo);
		localStorage.setItem('todos', JSON.stringify(allTodos));
	}
};

const deleteTodo = (todoID) => {
	let allTodos = JSON.parse(localStorage.getItem('todos'));
	const filteredTodos = allTodos.filter((todo) => todo.id !== todoID);

	localStorage.setItem('todos', JSON.stringify(filteredTodos));
};

const exportToJsonFile = (jsonData, name = 'data.json') => {
	if (jsonData.length == 0) {
		return;
	}

	const dataStr = JSON.stringify(jsonData);
	const dataUri =
		'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

	const exportFileDefaultName = name;

	const linkElement = document.createElement('a');
	linkElement.setAttribute('href', dataUri);
	linkElement.setAttribute('download', exportFileDefaultName);
	linkElement.click();
};

export { addTodo, getTodos, setTodos, exportToJsonFile, deleteTodo };
