<template>
	<div
		v-for="todo in todos"
		:key="todo.title"
		class="card bg-base-100 shadow-xl mt-1.5"
	>
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

		return {
			todos,
			todoTitle,
			todoHelpers,

			newTodo,
		};
	},
});
</script>
