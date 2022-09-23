<template>
	<div
		v-for="todo in todos"
		:key="todo.id"
		class="card bg-base-100 shadow-xl mt-1.5"
	>
		<div class="card-actions justify-end p-1">
			<span
				class="material-icons text-error cursor-pointer"
				@click="removeTodo(todo.id)"
				>delete</span
			>
		</div>

		<div class="card-body">
			<h2 class="card-title">{{ todo.title }}</h2>
			<p>{{ todo.date }}</p>
		</div>
	</div>

	<input type="checkbox" id="add-todo" class="modal-toggle" />
	<div class="modal">
		<div class="modal-box relative">
			<label
				@click="todoHelpers.getTodos()"
				for="add-todo"
				class="btn btn-sm btn-circle absolute right-2 top-2"
				>✕
			</label>

			<div>
				<input
					type="text"
					placeholder="Rule the world...."
					class="input w-full max-w-xs"
					v-model="todoTitle"
				/>
				<button class="btn btn-primary ml-2" @click="newTodo">Add</button>
			</div>
		</div>
	</div>

	<div class="w-full mt-3">
		<button class="btn float-right gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
				fill="#fff"
			>
				<path d="M0 0h24v24H0z" fill="none" />
				<path
					d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"
				/>
			</svg>

			Import
		</button>

		<button
			v-if="todos"
			class="mr-2 btn float-right gap-2"
			@click="exportTodos()"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
				fill="#fff"
			>
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M0 0h24v24H0z"
					fill="none"
				/>
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
				/>
			</svg>

			Export
		</button>
	</div>

	<label
		for="add-todo"
		class="btn modal-button btn-lg btn-circle fixed z-90 bottom-10 right-8 btn-primary"
	>
		<span class="material-icons">add</span>
	</label>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as todoHelpers from '@utils/todoFunctions';

export default defineComponent({
	setup() {
		const todoTitle = ref('');
		const todos = ref([]);
		todos.value = todoHelpers.getTodos();

		const newTodo = () => {
			todoHelpers.addTodo(todoTitle.value);
			todos.value = todoHelpers.getTodos();
		};

		const removeTodo = (id) => {
			todoHelpers.deleteTodo(id);
			todos.value = todoHelpers.getTodos();
		};

		const exportTodos = () => {
			todoHelpers.exportToJsonFile(
				todos.value,
				`Todos at ${new Date().toISOString()}.json`
			);
		};

		return {
			todos,
			todoTitle,
			todoHelpers,

			newTodo,
			exportTodos,
			removeTodo,
		};
	},
});
</script>
