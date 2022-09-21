const addTodo = (todoTitle) => {
	alert(todoTitle);
	console.log(todoTitle);
};

const getTodos = () => JSON.parse(localStorage.getItem('todos'));

export { addTodo, getTodos };
