const addTodo = () => {
	// alert('added');
};

const getTodos = () => JSON.parse(localStorage.getItem('todos'));

export { addTodo, getTodos };
