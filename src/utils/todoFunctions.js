const addTodo = (todoTitle) => {
	alert(todoTitle);
};

const getTodos = () => JSON.parse(localStorage.getItem('todos'));

export { addTodo, getTodos };
